import { ChangeDetectorRef, Component, OnChanges, ChangeDetectionStrategy, Input } from '@angular/core';
import { store } from '../store/store';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistComponent {
  public subscription: Subject<any> = new Subject();
  itemList: any = [];
  @Input() actionClicked:any;
constructor(private cdr: ChangeDetectorRef, private store: store){

}
ngOnChanges() {
  this.store.userAction("getList").pipe(takeUntil(this.subscription)).subscribe((res)=> {
    if(res && !this.itemList.includes(res)) {
      this.itemList.push(res);
    }
  })
}
addItem(index: any) {
  console.log('test');
}
}
