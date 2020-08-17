import { Component } from '@angular/core';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: [tab2.page.scss]
})
export class Tab2page{

message: Message= new Message();

    constructor(private shared: SharedService, private data: DataService){}

    onPost(){
        this.message.from=this.shared.userName;
        this.message.createdOn=new Date();
        this.data.saveMessage(this.message);
        //clear form
        //console.log('posting', this.message);
        this.message= new Message();
    }
}