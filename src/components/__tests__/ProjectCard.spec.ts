import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '../ProjectCard.vue'

const baseProps = {
  title: 'Personal Portfolio',
  description: 'Portofolio interaktif dengan animasi halus.',
  images: ['/assets/portofolio.png', '/assets/lms.png'],
  techStack: 'Vue.js, Vite, Tailwind CSS',
}

describe('ProjectCard', () => {
  it('menampilkan judul, deskripsi, dan tech stack', () => {
    const wrapper = mount(ProjectCard, { props: { ...baseProps, link: '' } })

    expect(wrapper.text()).toContain(baseProps.title)
    expect(wrapper.text()).toContain(baseProps.description)
    expect(wrapper.text()).toContain(baseProps.techStack)
  })

  it('me-render setiap gambar dengan URL yang diberikan', () => {
    const wrapper = mount(ProjectCard, { props: { ...baseProps, link: '' } })
    const images = wrapper.findAll('img')

    expect(images).toHaveLength(2)
    expect(images.map((img) => img.attributes('src'))).toEqual(baseProps.images)
    expect(images[0]?.attributes('alt')).toBe(baseProps.title)
  })

  it('membuka detail modal berisi tautan aman saat kartu diklik dan link tersedia', async () => {
    const wrapper = mount(ProjectCard, {
      props: { ...baseProps, link: 'https://ayi-shallahudin.vercel.app' },
    })

    expect(wrapper.find('a').exists()).toBe(false)

    await wrapper.find('button').trigger('click')
    const link = wrapper.find('a')

    expect(link.attributes('href')).toBe('https://ayi-shallahudin.vercel.app')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })

  it('menampilkan label sistem internal di modal saat link kosong', async () => {
    const wrapper = mount(ProjectCard, { props: { ...baseProps, link: '' } })

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('a').exists()).toBe(false)
    expect(wrapper.text()).toContain('Internal enterprise system')
  })
})
