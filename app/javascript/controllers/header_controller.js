import { Controller } from "@hotwired/stimulus"
import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {

    static targets = ["menu","dropdown"]
  
  connect() {
    this.menuTarget.addEventListener("click", (e)=>{
    
        this.openDropDown(this.dropdownTarget);
    })
  }

  openDropDown(element) {
    toggle(element).then(() => {
        console.log("Toggle transition complete")
    })
  }
 
}