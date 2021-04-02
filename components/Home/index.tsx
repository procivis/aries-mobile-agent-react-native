import React, {useState, useEffect, useContext} from 'react'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import {useHistory, useLocation} from 'react-router-native'

import AppHeaderLarge from '../AppHeaderLarge/index'
import BackButton from '../BackButton/index'
import LoadingOverlay from '../LoadingOverlay/index'

import {ErrorsContext} from '../Errors/index'
import {NotificationsContext} from '../Notifications/index'

import AppStyles from '../../assets/styles'

function Home() {
  let history = useHistory()
  let location = useLocation()

  const errors = useContext(ErrorsContext)
  const notifications = useContext(NotificationsContext)

  const mockCred = {
    "attributes": {
      "issuance_date": "mar 31, 2021", 
      "issuer_name": "sopha", 
      "message": "messg"
    }, 
    "connectionId": "6a640c11-3869-403a-b511-dbdaea14f5f9", 
    "id": "cc4ac626-306a-4832-91e3-08f5b6a54abe"
  }

  return (
    <>
      <BackButton backExit={true} />
      <View style={AppStyles.viewFull}>
        <View style={[AppStyles.tab, {top: 80}]}>
          <AppHeaderLarge />
          <TouchableOpacity
            style={[
              AppStyles.button,
              AppStyles.backgroundPrimary,
              {marginTop: 10},
            ]}
            onPress={() => {
              /*errors.setVisible(true)
            errors.setText("Workflows not\nyet created")
            errors.setPath("/home")*/
              history.push('/workflow/connect')
            }}>
            <Text style={[AppStyles.h2, AppStyles.textWhite]}>Begin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Home
