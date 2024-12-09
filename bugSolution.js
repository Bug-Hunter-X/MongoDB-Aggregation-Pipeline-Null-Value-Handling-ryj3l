```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  {$match: { /* ... */ }},
  {$addFields: {
    field: {
      $cond: {
        if: {
          $eq: ['$field', null]
        },
        then: '',
        else: '$field'
      }
    }
  }},
  {$group: {_id: '$field', count: {$sum: 1}}},
  {$sort: {count: -1}},
  {$limit: 10}
])
```