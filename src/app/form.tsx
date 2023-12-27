'use client'

import { create } from './actions'

export default function Form() {
  return <button onClick={() => create()}>Adicionar!</button>
}
