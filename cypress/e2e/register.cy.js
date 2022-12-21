import homepage from "../../Pages/homepage";
import loginpage from "../../Pages/loginpage";
import forms from "../../pages/forms";
import dropdown from "../../pages/dropdown";

describe('load url', ()=>{

    beforeEach('url', ()=>{
        homepage.lunchUrl()
    })
    it('login', ()=>{
        loginpage.username('Obinna')
        loginpage.phonenumber('08134333020')
        loginpage.email('sochimaobinna47@gmail.com')
        loginpage.password1('windows7@xp')
        loginpage.address('Onajimi Shomolu Lagos')
        loginpage.submit()
    })

    it('radio buttons', ()=>{
        forms.radiobutton1()
        forms.radiobutton2()
    })

    it('checkbox', ()=>{
        forms.checkboxfirst()
        forms.checkboxmiddle()
        forms.checkboxlast()
    })

    it('dropdown' , ()=>{
        dropdown.dropdownNorway('Norway')
        dropdown.dropdownMalta('Malta')
    })

})