import React from 'react'
import Dashboard from '../Dashboard'
import PerfilUsuarioContent from './PerfilUsuarioContent'

class PerfilUsuario extends Dashboard{
  constructor(props){
      super(props)
      this.content = <PerfilUsuarioContent />
  }
}

export default PerfilUsuario