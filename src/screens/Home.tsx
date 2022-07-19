import { useNavigation } from '@react-navigation/native';
import { Center, FlatList, Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';
import { useState } from 'react';
import Logo from '../assets/logo_secondary.svg';
import { Button } from '../components/Button';
import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';

export function Home() {
  const { colors } = useTheme();
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '123',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '456',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '789',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '12',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '1',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '3',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '4',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '5',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '6',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '7',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '8',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '9',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '23',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '34',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '45',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '56',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
    {
      id: '67',
      patrimony: '123456',
      when: '18/07/2022 as 10h',
      status: 'open',
    },
  ]);

  const navigation = useNavigation();

  function handleNewOrder() {
    navigation.navigate('new');
  }

  function handleOpenDetails(orderId: string) {
    navigation.navigate('details', { orderId });
  }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack w="full" justifyContent="space-between" alignItems="center" bg="gray.600" pt={12} pb={5} px={6}>
        <Logo />

        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
          <Heading color="gray.100">Solicitações</Heading>

          <Text color="gray.200">{orders.length}</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter type="open" title="em andamento" onPress={() => setStatusSelected('open')} isActive={statusSelected === 'open'} />
          <Filter type="closed" title="finalizados" onPress={() => setStatusSelected('closed')} isActive={statusSelected === 'closed'} />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} onPress={() => handleOpenDetails(item.id)} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText size={40} color={colors.gray[300]} />

              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {'\n'}
                solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />

        <Button title="Nova solicitação" onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}
