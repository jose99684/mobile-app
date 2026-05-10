// src/screens/HomeScreen.tsx

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back APP AVVILLAS,</Text>
            <Text style={styles.userName}>Hello Alex Morgan!</Text>
          </View>

          <View style={styles.avatar} />
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>

          <Text style={styles.balanceAmount}>
            $241,5000.00
          </Text>

          <View style={styles.cardFooter}>
            <View style={styles.cardIcon} />
            <View style={styles.toggleIcon} />
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionEmoji}>💸</Text>
            <Text style={styles.actionText}>Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionEmoji}>📥</Text>
            <Text style={styles.actionText}>Deposit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionEmoji}>💳</Text>
            <Text style={styles.actionText}>Cards</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionEmoji}>📊</Text>
            <Text style={styles.actionText}>Analytics</Text>
          </TouchableOpacity>

        </View>

        {/* Extra Buttons */}
        <View style={styles.extraButtonsContainer}>

          <TouchableOpacity style={styles.largeButton}>
            <Text style={styles.largeButtonText}>
              Pay Services
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.largeButton}>
            <Text style={styles.largeButtonText}>
              Send Money
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.largeButton}>
            <Text style={styles.largeButtonText}>
              Request Loan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.largeButton}>
            <Text style={styles.largeButtonText}>
              Investments
            </Text>
          </TouchableOpacity>

        </View>

        {/* Analytics */}
        <View style={styles.analyticsSection}>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Analytics
            </Text>

            <Text style={styles.seeAll}>
              See All
            </Text>
          </View>

          <View style={styles.chartContainer}>
            <View style={[styles.bar, { height: 20 }]} />
            <View style={[styles.bar, { height: 50 }]} />
            <View style={[styles.bar, { height: 35 }]} />
            <View style={[styles.bar, { height: 70 }]} />
            <View style={[styles.bar, { height: 45 }]} />
          </View>

        </View>

        {/* Recent Activity */}
        <View style={styles.activitySection}>

          <Text style={styles.sectionTitle}>
            Recent Activity
          </Text>
        <br></br>
          <View style={styles.activityItem}>
            <View style={styles.activityIcon} />

            <View style={styles.activityDetails}>
              <Text style={styles.activityTitle}>
                Payment Received
              </Text>

              <Text style={styles.activityTime}>
                Today, 10:00 AM
              </Text>
            </View>

            <Text style={styles.activityAmount}>
              +$450
            </Text>
          </View>

          <View style={styles.activityItem}>
            <View style={styles.activityIcon} />

            <View style={styles.activityDetails}>
              <Text style={styles.activityTitle}>
                Netflix Subscription
              </Text>

              <Text style={styles.activityTime}>
                Yesterday
              </Text>
            </View>

            <Text style={styles.activityAmount}>
              -$15
            </Text>
          </View>

          <View style={styles.activityItem}>
            <View style={styles.activityIcon} />

            <View style={styles.activityDetails}>
              <Text style={styles.activityTitle}>
                Grocery Payment
              </Text>

              <Text style={styles.activityTime}>
                Monday
              </Text>
            </View>

            <Text style={styles.activityAmount}>
              -$120
            </Text>
          </View>

        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>🏠</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>💳</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>📈</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>⚙️</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },

  greeting: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },

  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: '#DDDDDD',
  },

  balanceCard: {
    backgroundColor: '#D60000',
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,
  },

  balanceLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },

  balanceAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 12,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardIcon: {
    width: 40,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
  },

  toggleIcon: {
    width: 35,
    height: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },

  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  actionButton: {
    backgroundColor: '#F5F5F5',
    width: 75,
    height: 75,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },

  actionText: {
    fontSize: 12,
    fontWeight: '600',
  },

  extraButtonsContainer: {
    marginBottom: 30,
  },

  largeButton: {
    backgroundColor: '#D60000',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 12,
  },

  largeButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  analyticsSection: {
    marginBottom: 30,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  seeAll: {
    color: '#999999',
  },

  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 100,
    backgroundColor: '#F7F7F7',
    borderRadius: 16,
    padding: 15,
  },

  bar: {
    width: 20,
    backgroundColor: '#D60000',
    borderRadius: 10,
  },

  activitySection: {
    marginBottom: 30,
  },

  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  activityIcon: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: '#EEEEEE',
    marginRight: 12,
  },

  activityDetails: {
    flex: 1,
  },

  activityTitle: {
    fontWeight: 'bold',
    marginBottom: 3,
  },

  activityTime: {
    color: '#999999',
    fontSize: 12,
  },

  activityAmount: {
    fontWeight: 'bold',
    color: '#D60000',
  },

  bottomNav: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },

  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  navText: {
    fontSize: 24,
  },

});