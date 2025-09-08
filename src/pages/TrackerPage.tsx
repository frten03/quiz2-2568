import { useState } from "react";
import { randomId, useDisclosure } from '@mantine/hooks';
import { Button, Stack, Title, Divider, Container } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import AddExpenseModalProps from "../components/Modal";
import AddExpenseModal from "../components/Modal";

type Expense = {
  id: string;
  name: string;
  amount: number | string;
  category: string;
};

export default function ExpenseTracker() {
  const [opened, setOpened] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const categories = ["Food", "Transport", "Entertainment"];


  const addExpense = () => {
    //const newExpense : Expense = {
      //id: randomId
      //name: "",
      //amount: "",
      //category: "",
    //};
    setExpenses([...expenses, { id: Date.now(), ...newExpense }]);
  };

  //const deleteExpense = (id) => {
    //setExpenses(expenses.filter(expense => expense.id !== id));
  //};


  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button data-bs-toggle="modal">Add Expense Item</Button>
      {<AddExpenseModalProps 
      opened={opened} 
      onClose={close} 
      onAdd={addExpense}>
        </AddExpenseModalProps>}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{/* Type additional expense card list here. */}</Stack>
    </Container>
  );
}
