import About from './About'

import {shallow} from 'enzyme'

describe('About Page Testing',()=>{

    it('state check',()=> {
        let wrapper=shallow(<About/>)
        //console.log(wrapper.debug())
        expect(wrapper.state()).toEqual({name:'code improve',id:111})
    })

    it('html msj check',()=> {
        let wrapper=shallow(<About/>)
       // console.log(wrapper.debug())
        expect(wrapper.contains(<div className="hicls">Hello</div>)).toEqual(true)
    })

    it('Only msj check',()=>{
        let wrapper=shallow(<About/>)
       // console.log(wrapper.debug())
        expect(wrapper.containsAllMatchingElements([<div>Hello</div>])).toEqual(true)
    })

})