import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import { setupTest } from '@nuxt/test-utils'
import Vuex from 'vuex'

import Header from '@/components/Header.vue'
import Product from '@/components/Product.vue'
import Basket from '@/pages/Basket.vue'
import Index from '@/pages/Index.vue'
import { mutations } from '../../store'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Index.vue', () => {

  let mutations
  let store
  let state
  let products

  beforeEach(() => {

    state={

      basket:[

      ]

    };

    mutations = {
      addItem: jest.fn(),
      decreaseItem: jest.fn(),
      increaseItem: jest.fn(),
      deleteItem: jest.fn(),
      clearBasket: jest.fn()
    };

    store = new Vuex.Store({
      mutations,
      state 
    })
  })

  it('Renders product correctly when not in basket',  () => {
    const wrapper = mount(Product, { store, localVue, 
        attachTo:document.body,
        propsData:{
            product:
                {
                    id:1,
                    category:"Home",
                    title:"Wooden dinner table",
                    description:"Wooden table for dinner room",
                    price:1250,
                    pic_link:"https://ronixtools.com/en/blog/wp-content/uploads/2021/03/Learn-how-to-make-a-simple-wooden-table-at-home1.jpg"
                },
            isBasket:false
        },
     })
     expect(wrapper.text()).toContain("Home")
     expect(wrapper.text()).toContain("Wooden table for dinner room")
     expect(wrapper.text()).toContain("1250")
  })
  

  it('Renders product correctly when  in basket',  () => {
    const wrapper = mount(Product, { store, localVue, 
        attachTo:document.body,
        propsData:{
            product:
                {
                        id:1,
                        category:"Home",
                        title:"Wooden dinner table",
                        description:"Wooden table for dinner room",
                        price:1250,
                        pic_link:"https://ronixtools.com/en/blog/wp-content/uploads/2021/03/Learn-how-to-make-a-simple-wooden-table-at-home1.jpg"
                },
            productWrapper:{
                    product:{
                        id:1,
                        category:"Home",
                        title:"Wooden dinner table",
                        description:"Wooden table for dinner room",
                        price:1250,
                        pic_link:"https://ronixtools.com/en/blog/wp-content/uploads/2021/03/Learn-how-to-make-a-simple-wooden-table-at-home1.jpg"
                    },
                    productCount:3
                },
            isBasket:true
        },
     })

     expect(wrapper.text()).toContain("Home")
     expect(wrapper.text()).toContain("Wooden table for dinner room")
     expect(wrapper.text()).toContain("1250")
     expect(wrapper.text()).toContain("In Basket : 3")
     expect(wrapper.text()).toContain("In Total : 3750$")
  })
  

  it('sends emit signals',  () => {
    const wrapper = mount(Product, { store, localVue, 
        attachTo:document.body,
        propsData:{
            product:
                {
                        id:1,
                        category:"Home",
                        title:"Wooden dinner table",
                        description:"Wooden table for dinner room",
                        price:1250,
                        pic_link:"https://ronixtools.com/en/blog/wp-content/uploads/2021/03/Learn-how-to-make-a-simple-wooden-table-at-home1.jpg"
                },
            productWrapper:{
                    product:{
                        id:1,
                        category:"Home",
                        title:"Wooden dinner table",
                        description:"Wooden table for dinner room",
                        price:1250,
                        pic_link:"https://ronixtools.com/en/blog/wp-content/uploads/2021/03/Learn-how-to-make-a-simple-wooden-table-at-home1.jpg"
                    },
                    productCount:3
                },
            isBasket:true
        },
     })


     let button1 = wrapper.findAll('button').at(0)
     let button2 = wrapper.findAll('button').at(1)
     
     button1.trigger('click')
     button2.trigger('click')

     expect(mutations.increaseItem).toHaveBeenCalled()
     expect(mutations.decreaseItem).toHaveBeenCalled()
  })

  
})
