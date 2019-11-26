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
  @ViewChild('myckeditor')
  ckeditor: any;

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


  onEditorChange() {
    console.log('click');
  }

  onReady() {
    console.log('click');
  }

  onFocus() {
    console.log('click');
  }

  onContentDom() {
    console.log('click');
  }

  onFileUploadRequest() {
    console.log('click');
  }

  onFileUploadResponse() {
    console.log('click');
  }

  onBlur() {
    console.log('click');
  }

}
