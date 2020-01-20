import React, { useRef, useMemo } from 'react'
import { Math as THREEMath } from 'three'
import { useRender } from 'react-three-fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const Model = ({ url }) => {
    const model = useRef()
  let rot = 0

  const obj = useMemo(() => new OBJLoader().load(url), [url])

    useRender(() => {
        const rad = 5 * Math.sin(THREEMath.degToRad(rot += 0.3))
        model.current.rotation.set(rad, rad, 0)
  })
    return <primitive object={obj} ref={model} />
}

export default Model