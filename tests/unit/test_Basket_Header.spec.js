import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import { setupTest } from '@nuxt/test-utils'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'
import Header from '@/components/Header.vue'
import Product from '@/components/Product.vue'
import Basket from '@/pages/Basket.vue'
import { mutations } from '../../store'

const localVue = createLocalVue()

localVue.use(Vuex)

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({status: 200})),
  post: jest.fn(() => Promise.resolve({status: 200})),
  delete: jest.fn(() => Promise.resolve({status: 200}))
})) 

describe('Header.vue', () => {
  it('renders Header', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.text()).toMatch("Shopping Cart")
  })
  
  it('renders Header', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.text()).toMatch("Basket")
  })

})

describe('Basket.vue', () => {

  let mutations
  let store
  let state

  beforeEach(() => {

    state={

      basket:[

        {
          product:{
            id:1,
            category:"Home",
            title:"Wooden dinner table",
            description:"Wooden table for dinner room",
            price:1250,
            pic_link:"https://ronixtools.com/en/blog/wp-content/uploads/2021/03/Learn-how-to-make-a-simple-wooden-table-at-home1.jpg"
          },
          productCount:2
        },
        {
          product:{
              id:4,
              category:"Home",
              title:"TV Unit",
              description:"TV Unit for plasma TV's",
              price:150,
              pic_link:"https://www.ulcdn.net/opt/www.ulcdn.net/images/products/125614/slide/666x363/Zephyr_LargeTV_Unit_TK_2.jpg?1608823365"
          },
          productCount:3
        },
        {
          product:{
            id:6,
            category:"Electronics",
            title:"Iphone 13",
            description:"Latest model of iphone released this year",
            price:1000,
            pic_link:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-silver-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652954000"
          },
          productCount:1
        }
      ]

    };

    mutations = {
      addItem: jest.fn(),
      decreaseItem: jest.fn(),
      increaseItem: jest.fn(),
      deleteItem: jest.fn(),
      clearBasket: jest.fn(),
      addWrapper: jest.fn(),
    };

    store = new Vuex.Store({
      mutations,
      state 
    })
  })

  it('renders products in basket correctly', () => {
    const wrapper = mount(Basket, { store, localVue })
    let comp= wrapper.findAllComponents(Product).at(0)
    expect(comp.text()).toContain("Wooden dinner table")
  })

  it('renders same amount of product component as in the basket', () => {
    const wrapper = mount(Basket, { store, localVue })
    let comp= wrapper.findAllComponents(Product)
    expect(comp.length).toBe(3);
  })

  it('renders the page with no product', () => {
    state.basket=[];
    const wrapper = mount(Basket, { store, localVue })
    expect(wrapper.text()).toContain('You have no items in your basket');
  })


  it('calls decrease item function', () => {
    const wrapper = mount(Basket, { store, localVue })
    let comp= wrapper.findComponent(Product)
    let button = comp.findAll('button').at(1)
     button.trigger('click')

    expect(mutations.decreaseItem).toHaveBeenCalled()
  })

  it('calls add item function', () => {
    const wrapper = mount(Basket, { store, localVue })
    let comp= wrapper.findComponent(Product)
    let button = comp.findAll('button').at(0)
     button.trigger('click')

    expect(mutations.increaseItem).toHaveBeenCalled()
  })

  it('calls delete item function', () => {
    const wrapper = mount(Basket, { store, localVue })
    let comp= wrapper.findAllComponents(Product).at(2)
    let button = comp.findAll('button').at(1)
     button.trigger('click')

    expect(mutations.deleteItem).toHaveBeenCalled()
  })

  it('calculates total price correctly', () => {
    const wrapper = mount(Basket, { store, localVue }) 
    let totalPrice = wrapper.find('.totalPrice')
    expect(totalPrice.text()).toContain("3950")
  })

  it('calls clear basket', () => {
    const wrapper = shallowMount(Basket, { store, localVue }) 
    let button = wrapper.findAll('button').at(0)
     button.trigger('click')
    expect(mutations.clearBasket).toHaveBeenCalled()
  })

})




