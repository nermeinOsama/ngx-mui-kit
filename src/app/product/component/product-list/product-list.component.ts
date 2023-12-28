import { Component } from '@angular/core';
import { MukTableComponent, Column, ITableConfig, ActionsStyle } from "ngx-mui-kit/components/muk-table";
import { MatTableDataSource } from '@angular/material/table';
import { ButtonType, MukButtonTypes, MukThemePalette, TooltipPositions } from 'ngx-mui-kit/components/muk-button';
import { IAction } from 'ngx-mui-kit/common/interfaces';
import { IAlert } from 'ngx-mui-kit/components/muk-alert';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  alert: IAlert = {
    direction: "ltr",
    panelClass: "class",
    message: "this is alert!",
    action: "Close",
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top",
  };
  tableConfig: (ITableConfig<any> )= {
    dataSource: new MatTableDataSource([
      {
        bol1: true,
        bol2: true,
        currency1: 5555,
        currency2: 5555,
        date1: '10-08-2023',
        date2: '10-08-2023',
        image: 'https://fakeimg.pl/300/',
        number1: 55555,
        number2: 555555,
        text: 'Text',
      },
      {
        bol1: true,
        bol2: true,
        currency1: 5555,
        currency2: 5555,
        date1: '10-08-2023',
        date2: '10-08-2023',
        image: 'https://fakeimg.pl/300/',
        number1: 55555,
        number2: 555555,
        text: 'Text',
      },
      {
        bol1: true,
        bol2: true,
        currency1: 5555,
        currency2: 5555,
        date1: '10-08-2023',
        date2: '10-08-2023',
        image: 'https://fakeimg.pl/300/',
        number1: 55555,
        number2: 555555,
        text: 'Text',
      },
      {
        bol1: true,
        bol2: true,
        currency1: 5555,
        currency2: 5555,
        date1: '10-08-2023',
        date2: '10-08-2023',
        image: 'https://fakeimg.pl/300/',
        number1: 55555,
        number2: 555555,
        text: 'Text',
      },
      {
        bol1: true,
        bol2: true,
        currency1: 5555,
        currency2: 5555,
        date1: '10-08-2023',
        date2: '10-08-2023',
        image: 'https://fakeimg.pl/300/',
        number1: 55555,
        number2: 555555,
        text: 'Text',
      },
      {
        bol1: true,
        bol2: true,
        currency1: 5555,
        currency2: 5555,
        date1: '10-08-2023',
        date2: '10-08-2023',
        image: 'https://fakeimg.pl/300/',
        number1: 55555,
        number2: 555555,
        text: 'Text',
      },
      {
        bol1: true,
        bol2: true,
        currency1: 5555,
        currency2: 5555,
        date1: '10-08-2023',
        date2: '10-08-2023',
        image: 'https://fakeimg.pl/300/',
        number1: 55555,
        number2: 555555,
        text: 'Text',
      },
      {
        bol1: true,
        bol2: true,
        currency1: 5555,
        currency2: 5555,
        date1: '10-08-2023',
        date2: '10-08-2023',
        image: 'https://fakeimg.pl/300/',
        number1: 55555,
        number2: 555555,
        text: 'Text',
      },
      {
        bol1: true,
        bol2: true,
        currency1: 5555,
        currency2: 5555,
        date1: '10-08-2023',
        date2: '10-08-2023',
        image: 'https://fakeimg.pl/300/',
        number1: 55555,
        number2: 555555,
        text: 'Text',
      },
      {
        bol1: true,
        bol2: true,
        currency1: 5555,
        currency2: 5555,
        date1: '10-08-2023',
        date2: '10-08-2023',
        image: 'https://fakeimg.pl/300/',
        number1: 55555,
        number2: 555555,
        text: 'Text',
      },
      {
        bol1: false,
        bol2: false,
        currency1: 5555,
        currency2: 5555,
        date1: '10-08-2023',
        date2: '10-08-2023',
        image: 'https://fakeimg.pl/300/',
        number1: 55555,
        number2: 555555,
        text: 'Text',
      },
    ]),
    totalElements: 50,
    pageSize: 10,
    displayedColumns: [
      {
        label: 'Bol1',
        path: 'bol1',
        type: Column.Boolean,
        isPrimary: true,
      },
      {
        label: 'Bol2',
        path: 'bol2',
        type: Column.Boolean,
        mapValues: { true: 'Yes', false: 'No' },
        isTruncated: true,
      },
      {
        label: 'Content',
        path: 'content',
        type: Column.Content,
        contentIndex: 0,
      },
      {
        label: 'Currency1',
        path: 'currency1',
        type: Column.Currency,
      },
      {
        label: 'Currency2',
        path: 'currency2',
        type: Column.Currency,
        currency: 'EGP',
      },
      {
        label: 'Date1',
        path: 'date1',
        type: Column.Date,
      },
      {
        label: 'Date2',
        path: 'date2',
        type: Column.Date,
        format: 'MMMM dd, YYYY',
      },
      {
        label: 'Image',
        path: 'image',
        type: Column.Image,
      },
      {
        label: 'Number1',
        path: 'number1',
        type: Column.Number,
        withoutComma: true,
      },
      {
        label: 'Number2',
        path: 'number2',
        type: Column.Number,
      },
      {
        label: 'Text',
        path: 'text',
        type: Column.Text,
        isSortable: true,
      },
      {
        label: 'Actions1',
        path: 'actions1',
        type: Column.Actions,
        actions: [
          {
            text: 'Add',
            isMukButton: false,
            isLoading: false,
            color: MukThemePalette.Warn,
            matType: MukButtonTypes.Flat,
            // spinnerColor:'white',
            icon: 'add',
            isDisabled: false,
            type: ButtonType.Button,
            toolTip: {
              position: TooltipPositions.Below,
              toolTip: 'Test',
            },
          },
        ],
      },
      {
        label: 'Actions2',
        path: 'actions2',
        type: Column.Actions,
        actionsStyle: ActionsStyle.Dots,
        actions: [
          {
            text: 'Add',
            isMukButton: false,
            isLoading: false,
            color: MukThemePalette.Warn,
            matType: MukButtonTypes.Flat,
            // spinnerColor:'white',
            icon: 'add',
            isDisabled: false,
            type: ButtonType.Button,
            toolTip: {
              position: TooltipPositions.Below,
              toolTip: 'Test',
            },
          },
        ],
      },
    ],
    isLoading: false,
    loadMoreButtonConfig: {
      text: 'Load More',
      color: MukThemePalette.Primary,
      isMukButton: true,
    },
  }

onPaginatorChange(pageIndex:number){
  console.log("pageIndex",pageIndex)
}

onTakeAction(e:IAction<any>){
  console.log("takeAction",e)
}

// onSortChange(e:Sort){
//   console.log("takeAction",e)
// }
}

