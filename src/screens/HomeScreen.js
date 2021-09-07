import React, { useState, useEffect } from 'react';
import {Text,View, StyleSheet} from 'react-native';
import CustomButton from '../components/Button';
import { setLogout, hideLoader,toggleLoader } from '../redux/system/action';
import { useDispatch } from 'react-redux';
import { colors } from '../constants';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import Dropdown from '../components/DropDown';
import apiConfig from '../config/apiConfig';
import axios from '../utils/axios';
import { getIsDarkMode } from '../redux/system/selector';
import Input from '../components/Input';




export default function HomeScreen({navigation}){

  const dispatch = useDispatch();

  const isDarkMode = getIsDarkMode();

    
  const [project, SetProject] = useState([]);

  const [pageData, setPageData] = useState({
      description: '',
      projectId: null,
      time: '',
      userId: 1,
  });

    

    

  const onChangeText = (key, text) => {
    setPageData({...pageData, [key]: text});
 };

  const dropdownContainerStyle = {
      ...styles.dropdownContainer,
      backgroundColor: isDarkMode
      ? colors.dark.primary[6]
      : colors.light.background,
    };

  const saveProjectTimeline = () => {

      try {
          console.log('PAGE', pageData);
          axios
          .post(apiConfig.prefixes.saveProject, pageData)
          .then(response => console.log(JSON.stringify(response.data, null, 4)));
      }
        catch (error) {}
    };
    
  const fetchProjectList = () => {
      try {
            
        axios.get(apiConfig.prefixes.projectList).then(response => {
          if (response.status === 200) {
            const {data} = response.data;
             
    
            const newData = data
              ? data.map(x => ({
                  label: x.name,
                  value: x.id,
                }))
              : [];
    
            SetProject(newData);
          }
        });
        } catch (error) {
          console.log("Error",error);
        } finally {
      }
  };
    
    useEffect(() => {
      
      fetchProjectList();
    }, []);


  

    
    

    return(
        <CustomView style={{flex:1}}>

          <Header title={'Home'}/>
         
        
           <View style={dropdownContainerStyle}>

            <Dropdown
            items={project}
            placeholder={'Proje Seciniz'}
            onValueChange={val => onChangeText('projectId', val)}
            color={isDarkMode ? colors.cFFFFFF : colors.c324c94}
            />
      
           </View>

           <View style={dropdownContainerStyle}>
            <Dropdown
            items={[
            {label: '1 Saat', value: 60},
            {label: '2 Saat', value: 120},
            {label: '3 Saat', value: 180},
            {label: '4 Saat', value: 240},
            {label: '5 Saat', value: 300},
            {label: '6 Saat', value: 360},
            {label: '7 Saat', value: 420},
            {label: '8 Saat', value: 480},
            ]}
            placeholder={'Zaman Seciniz'}
            onValueChange={val => onChangeText('time', val)}
            color={isDarkMode ? colors.cFFFFFF : colors.c324c94}
            
                
            />
              
           </View>
           <Input
            placeHolder={"Proje Acıklama"}
            placeHolderTextColor={colors.cFFFFFF}
            style={styles.inputContainer}
            onChangeText={val => onChangeText('description', val)}
            value={pageData.description}
            multiline
            color={colors.cFFFFFF}
            />

           <View style={styles.inputContainer}>
 
                <CustomButton
                    onPress={()=> saveProjectTimeline()}
                    title={'Projeyi Kaydet'}
                />
           </View>
       
          


                         
            
        </CustomView>
    );
}


const styles = StyleSheet.create({
    
    dropdownContainer:{
        padding:15,
        backgroundColor:colors.cFFFFFF,
               
    },
    inputContainer:{
        marginVertical: 15,    
    },
  
});

