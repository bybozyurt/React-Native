import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Switch} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setLogout, setTheme} from '../redux/system/action';
import CustomView from '../components/CustomView';
import {getIsDarkMode, getLang, getUser} from '../redux/system/selector';
import Header from '../components/Header';
import {Picker} from '@react-native-picker/picker';
import Dropdown from '../components/DropDown';
import I18n, {changeLanguage} from '../i18n';
import { setLanguage } from '../redux/system/action';
import { useNavigation } from '@react-navigation/native';
import {fonts, colors} from '../constants';
import Button from '../components/Button';
import CustomText from '../components/Text';
import { color } from 'react-native-reanimated';



export default function ProfileScreen() {
  const isDarkMode = getIsDarkMode();
  const user = getUser();
  const language = getLang();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const toggleTheme = val => {
    dispatch(setTheme(val));

  };

  const logout = () => {
    dispatch(setLogout());
  };

  

  const handleLanguageChange = lang => {
    if (lang) {
      changeLanguage(language);
      navigation.navigate('Profile');
      dispatch(setLanguage(lang));
      
    }
  };

  //ios için gerekli
  // const onDonePress = () => {
  //   changeLanguage(language);
  //   navigation.navigate('Profile');
  // };

  const infoBoxStyle = {
    ...styles.infoBox,
    backgroundColor: isDarkMode
    ? colors.dark.primary[6]
    : colors.light.background,

  };

  const cellStyle = {
    ...styles.cell,
    borderBottomColor: isDarkMode
    ? colors.dark.white[100]
    : colors.dark.primary[5],
  }



  
  


  return (
    <CustomView
      style={styles.container}>
      <Header title={'Profile'}/>
      <ScrollView
      style={styles.scrolView}
      showsVerticalScrollIndicator={false}
      >

      <View style={{justifyContent:'center',alignItems:'center'}}>
      
      {user.profilePic ?(
        <Image
          source={{uri:user.profilePic}}
          style={styles.profileImage}
          resizeMethod='scale'
          resizeMode='contain'

        />
      ) : 
        <Image
          source={require('../assets/images/placeperson.png')}
          style={styles.profileImage}
          resizeMethod='scale'
          resizeMode='contain'
        />
      
      }
      </View>
      <View style={cellStyle}>
        <CustomText style={styles.displayName} text={user.username}></CustomText>
      </View>

      <View style={infoBoxStyle}>
        <View style={styles.infoContainer}>

          {/* <View style={cellStyle}>
            <Text style={styles.title}>Kullanıcı Adı</Text>
            <Text style={styles.info}>{user.username}</Text>
          </View> */}

          <View style={cellStyle}>
            <CustomText style={styles.title} text={'Telefon'}></CustomText>
            <CustomText style={styles.info} text={user.mobile}></CustomText>
          </View>

          <View style={cellStyle}>
            <CustomText style={styles.title} text={'Meslek'}></CustomText>
            <CustomText style={styles.info} text={user.job}></CustomText>
          </View>

          <View style={cellStyle}>
            <CustomText style={styles.title} text={'Ülke'}></CustomText>
            <CustomText style={styles.info} text={user.country}></CustomText>
          </View>

          <View style={cellStyle}>
            <CustomText style={styles.title} text={'Teknoloji'}></CustomText>
            <CustomText style={styles.info} text={user.technologies}></CustomText>
          </View>
        </View>
      </View>

      



      <View style={infoBoxStyle}>
        <View style={styles.infoContainer}>

          <View style={cellStyle}>
          <Text style={styles.title}>Dil Seçimi</Text>
          <Dropdown
            items={[
              {label: 'Türkçe', value: 'tr'},
              {label: 'English', value: 'en'},
            ]}
            placeholder="Dil Seçiniz"
            value={language}
            onValueChange={val => handleLanguageChange(val)}
            onDonePress={() => onDonePress()}/>
          </View>

          <View style={cellStyle}>
            <CustomText style={styles.title} text={'Tema Seçimi'}></CustomText>
            <View style={styles.row}>
              <CustomText style={styles.title} text={'Dark Mode'}></CustomText>
              <Switch
                onValueChange={val => toggleTheme(val)}
                value={isDarkMode}
              />
            </View>

          
            <Button
              title={'Çıkış Yap'}
              onPress={()=> logout()}

            />
          
          
          </View>

        </View>
      </View>

      </ScrollView>
        
      
    </CustomView>
  );
}

const styles = StyleSheet.create({

  scrolView:{
    paddingBottom:20,
    margin:30
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  container:{
    flex:1,
    
  },
  infoContainer:{
    padding:20,
    elevation:3,
    marginTop:5,

  },
  title: {
    marginVertical: 5, 
    fontSize: fonts.f12, 
    marginBottom: 5},

  info: {
    fontSize: fonts.f12,
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoBox: {
    width: '100%',
    borderRadius: 6,
    backgroundColor: colors.cFFFFFF,
    marginVertical: 15,
    elevation: 3,
  },
  cell: {
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.dark.primary[5],
  },
  displayName:{
    fontSize: fonts.f15, 
    
  },

});