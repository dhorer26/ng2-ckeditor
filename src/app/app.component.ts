import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log = '';
  @ViewChild('myckeditor', {static: true})
  ckeditor: any;
  onDrop: any;
  myckeditor: any;

  constructor() {
    this.mycontent = `<p>My html content</p>`;
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  onChange($event: any): void {
    console.log(this.mycontent);
    // this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log('onPaste');
    // this.log += new Date() + "<br />";
  }


  onEditorChange($event: any) {
    console.log('click');
  }

  onReady($event: any) {
    console.log('click');
  }

  onFocus($event: any) {
    console.log('click');
  }

  onContentDom($event: any) {
    console.log('click');
  }

  onFileUploadRequest($event: any) {
    console.log('click');
  }

  onFileUploadResponse($event: any) {
    console.log('click');
  }

  onBlur($event: any) {
    console.log('click');
  }

}
