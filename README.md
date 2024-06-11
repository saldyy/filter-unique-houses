### This project for a simple csv processing data for houses

**Problems:**

Giving a csv file with houses data, we need to process the data and return the unique houses.
House with the same id or address are considered the same house.

**Sample csv:**
| houseId | houseAddress       |
|---------|--------------------|
| 1       | 1 Main St.         |
| 1       | 1 Main Street      |
| 2       | 1 Main Street      |
| 2       | 1 Main Street West |
| 3       | 2 Fifth Ave        |
| 4       | 3 Wall Street      |


Main St and Main Street are considered the same address.


**Assumption:**
- The csv must have 2 columns houseId and houseAddress
- There are no missing values in the csv on houseId and houseAddress columns, if there are missing values, the program will ignore it and calculate the rest.

**Output of sample csv:** 3 houses

**How to run the program:**

This web application will expose an api ``POST: /houses/filter-uniques`` to process the csv file and return a json response with the unique houses.

```
{
    "amountOfUniqueHouses": 3
}
```
