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

  it('membungkus kartu dengan tautan aman saat link tersedia', () => {
    const wrapper = mount(ProjectCard, {
      props: { ...baseProps, link: 'https://ayi-shallahudin.vercel.app' },
    })
    const link = wrapper.find('a')

    expect(link.attributes('href')).toBe('https://ayi-shallahudin.vercel.app')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })

  it('tidak me-render tautan saat link kosong', () => {
    const wrapper = mount(ProjectCard, { props: { ...baseProps, link: '' } })

    expect(wrapper.find('a').exists()).toBe(false)
  })
})
