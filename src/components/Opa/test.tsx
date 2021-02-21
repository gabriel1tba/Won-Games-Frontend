import { render, screen } from '@testing-library/react'

import Opa from '.'

describe('<Opa />', () => {
  it('should render the heading', () => {
    const { container } = render(<Opa />)

    expect(screen.getByRole('heading', { name: /Opa/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
