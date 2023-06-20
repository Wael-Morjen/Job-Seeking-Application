import { useState} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';

import { useRouter } from 'expo-router';

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';

import PopularJobCard from '../../common/cards/popular/PopularJobCard';

import useFetch from '../../../hook/useFetch';

const Popularjobs = () => { 
  const router = useRouter();
  const { data, isLoading, error } = useFetch(
    'search', {
      query: 'React developer',
      num_pages: 1
    }
  )

  console.log(data);
  return (
    <View style={styles.container}> 

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>
 
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={( item ) => (
              <PopularJobCard 
                item={item}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs