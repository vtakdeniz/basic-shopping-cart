import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import { setupTest } from '@nuxt/test-utils'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'
import Header from '@/components/Header.vue'
import Product from '@/components/Product.vue'
import Basket from '@/pages/Basket.vue'
import Index from '@/pages/Index.vue'
import { mutations } from '../../store'

const localVue = createLocalVue()

localVue.use(Vuex)

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({status: 200}))
})) 

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

    products=[
      {
        id:1,
        category:"Home",
        title:"Wooden dinner table",
        description:"Wooden table for dinner room",
        price:1250,
        pic_link:"https://ronixtools.com/en/blog/wp-content/uploads/2021/03/Learn-how-to-make-a-simple-wooden-table-at-home1.jpg"
      },
      {
        id:2,
        category:"Garden",
        title:"Garden Hose",
        description:"Green garden hose",
        price:50,
        pic_link:"https://cdn11.bigcommerce.com/s-3c8l9ljcjn/images/stencil/1280x1280/products/24929/35825/39a0105_lifetime_garden_hose_rack_alt2__22440__05859.1593445624__65789.1631907713.jpg?c=1"
      },
      {
        id:3,
        category:"Garden",
        title:"Wooden garden table",
        description:"Wooden table for gardens",
        price:1350,
        pic_link:"https://image.made-in-china.com/202f0j00pwvEBLQMaTqP/Outdoor-Furniture-Wooden-Garden-Table-Picnic-Table-Sets-for-Children.jpg"
      },
      {
        id:4,
        category:"Home",
        title:"TV Unit",
        description:"TV Unit for plasma TV's",
        price:150,
        pic_link:"https://www.ulcdn.net/opt/www.ulcdn.net/images/products/125614/slide/666x363/Zephyr_LargeTV_Unit_TK_2.jpg?1608823365"
      },
    ]
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

  

  it('renders products correctly', () => {
    const wrapper = mount(Index, { store, localVue, 
        data(){
          return{
            products,
            inBasket:[],
            basketCount:[],
          }
        },
     })
    let comp= wrapper.findAllComponents(Product)
    expect(comp.length).toBe(4)
  })
  

  it('Adds products to the basket',  async () => {
    const wrapper = mount(Index, { store, localVue, 
        attachTo:document.body,
        data(){
          return{
            products,
            inBasket:[],
            basketCount:[],
          }
        },
     })
    let comp= wrapper.findComponent(Product)
    let button = comp.find('button')
    button.trigger('click')
    await flushPromises()
    expect(mutations.addItem).toHaveBeenCalled()
    
    //wrapper.destroy()
  })
  


})
