import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlanCenterCard from './PlanCenterCard';
import MonederoCenterCard from './MonederoCenterCard';
import styles from '@styles/BalanceSection.styles';

const BalanceSection: React.FC = () => {
    return (
        <View style={styles.balanceContainer}>
            <Text style={styles.sectionTitle}>Mi Saldo</Text>
            <PlanCenterCard />
            <MonederoCenterCard />
        </View>
    );
};

export default BalanceSection;
