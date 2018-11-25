<template>
  <div>
    <v-layout>
      <v-flex xs12>
        <v-data-table :headers="orderHeaders" :items="orders">
          <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.date }}</td>
            <td>{{ props.item.status }}</td>
            <td>{{ props.item.name }}</td>
            <td>
            <v-icon>
              backup
            </v-icon>
            </td>
          </tr>
          </template>
          <template slot="expand" slot-scope="props">
          {{ props.item.notes }}
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
 </div>
</template>
<script>
/* eslint-disable */
 export default {
  data() {
   return {
    orderHeaders: [{
      text: 'Offer id',
      value: 'id'
     },
     {
      text: 'Date',
      value: 'date'
     },
     {
      text: 'Status',
      value: 'status'
     },
     {
      text: 'Order name',
      value: 'name'
     },
     {
      text: 'Actions',
      value: 'actions'
     }
    ],
    orders: [{
      id: 0,
      date: '0000-00-00',
      status: 0,
      name: 'default',
      notes: 'default_note'
     },
     {
      id: 1,
      date: '0000-00-00',
      status: 2,
      name: 'default',
      notes: 'верстка'
     }
    ],
    defaultOrder: {
     id: 0,
     date: '0000-00-00',
     status: '',
     name: '',
     notes: ''
    }
   }
  }
 }

</script>
<style scoped>
</style>
