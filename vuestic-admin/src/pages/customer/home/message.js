import $ from 'jquery';
class messageBox {
  constructor(head, content) {
    this.head = head;
    this.content = content;
  }

  displayMess() {
    return `
        <button type="button" class="message__btn">
              <i class="bi bi-x-lg"></i>
          </button>
          <div class="message__head">
              <span>${this.head}</span>
          </div>
          <div class="message__content">
              <p>
                  ${this.content}
              </p>
              <a href="../room/rooms.html" class="page-link-custom">See more information</a>
          </div>
      `;
  }
}



export default messageBox;
