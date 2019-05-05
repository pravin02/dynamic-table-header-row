# DynamicTable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Dynamic table column and row binding
Below table bind the details dynamically accordingly JSON received from server

Description: The below list-component receives data from API using service and checks the received data is null or undefined if it is it will display error message on screen otherwise retrive first indexed object and scan for keys of json to bind on th tag.
Hint: Object.keys(object);
Row Binding: To bind the values on rows we have to use nestate loop as,
1) Loop for revceived json and 
2) For keys

<table class="table table-stripped">
<thead>
<tr>
<th *ngFor="let key of keys"> {{key | titlecase}}</th>
</tr>
</thead>
<tbody>
<tr *ngFor="let user of customers">
<td *ngFor="let key of keys">{{user[key]}}</td>
</tr>
</tbody>
</table>

1) http://localhost:4200/assets/api/list1.json
![alt text](https://github.com/pravin02/dynamic-table-header-row/blob/master/screenshots/json1.png)

2) http://localhost:4200/assets/api/list2.json
![alt text](https://github.com/pravin02/dynamic-table-header-row/blob/master/screenshots/json2.png)

3) http://localhost:4200/assets/api/list3.json
![alt text](https://github.com/pravin02/dynamic-table-header-row/blob/master/screenshots/json3.png)

4) http://localhost:4200/assets/api/list4.json No record found
![alt text](https://github.com/pravin02/dynamic-table-header-row/blob/master/screenshots/norecord.png)

