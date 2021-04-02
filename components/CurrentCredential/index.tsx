import React, {useState, useEffect, useContext} from 'react'

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import {useHistory} from 'react-router-native'

import AppHeader from '../AppHeader/index'

import {ErrorsContext} from '../Errors/index'

import AppStyles from '../../assets/styles'
import Images from '../../assets/images'
import Styles from './styles'
import { ICredential } from '../../types'

interface ICurrentCredential {
  credential: ICredential
}

function CurrentCredential(props) {
  let history = useHistory()

  return (
    <View style={AppStyles.viewOverlay}>
      <View style={[AppStyles.credView, AppStyles.backgroundWhite]}>
        <TouchableOpacity
          style={AppStyles.backbutton}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          onPress={() => props.setViewCredential(false)}>
          <Image source={Images.arrowDown} style={AppStyles.arrow} />
        </TouchableOpacity>
        {props.credential ? (
          <>
          <ScrollView style={{width: '104%'}}>
            <View
              style={[
                AppStyles.tableItem,
                AppStyles.tableListItem,
                AppStyles.backgroundSecondary,
              ]}>
              <View>
                <Text
                  style={[
                    {fontSize: 20, top: 8},
                    AppStyles.textWhite,
                    AppStyles.textBold
                  ]}>
                  {props.credential.schemaId ? props.credential.schemaId.match(/(.*?):([0-9]):([a-zA-Z .-_0-9]+):([a-z0-9._-]+)$/)[3] : 'New Credential'}</Text>
                <Text
                  style={[
                    {fontSize: 14, top: 6},
                    AppStyles.textWhite
                  ]}
                >
                  {props.credential.attributes.issuer_name ? 'from ' + props.credential.attributes.issuer_name : null }
                </Text>
              </View>
            </View>
            {Object.entries(props.credential.attributes).map((attribute:any) => {
              const capitalize = (x:any) => x.charAt(0).toUpperCase() + x.slice(1)
              attribute[0] = capitalize(attribute[0])
              return (
                <View
                  style={[
                    AppStyles.tableItem,
                    Styles.tableItem,
                    Styles.tableSubItem
                  ]}>
                  <View>
                    <Text
                      style={[
                        {fontSize: 18},
                        AppStyles.textBlack,
                      ]}>
                      <Text style={AppStyles.textBold}>{attribute[0]}: </Text>
                      {attribute[1]}
                    </Text>
                  </View>
                </View>
              )
            })}
            </ScrollView>
          </>
        ) : null}
      </View>
    </View>
  )
}

export default CurrentCredential
