import { Text, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'

const App = () => {
  return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards/>
          <ElevatedCards/>
          <FancyCard/>
          <FancyCard/>
          <FancyCard/>
          <ActionCards/>
          <ContactList/>
        </ScrollView>
      </SafeAreaView>
  )
}

export default App