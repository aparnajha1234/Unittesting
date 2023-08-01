import Blog from './Blog'

import {shallow} from 'enzyme'

describe('Blog Page test',()=>
{
    it('find check',()=>{
        let wrapper= shallow(<Blog/>);
        expect(wrapper.find('.liCls').length).toBe(3)

    })
    
    it('at & key check',()=>{
        let wrapper= shallow(<Blog/>);
        expect(wrapper.find('.liCls').at(0).key()).toBe('angular')

    })
    
    it('child check',()=>{
        let wrapper= shallow(<Blog/>);
        expect(wrapper.find('.numbers').childAt(0).type()).toBe('span')

    })

    it('children length check',()=>{
        let wrapper= shallow(<Blog/>);
        expect(wrapper.find('ul').children().length).toBe(3)

    })

})