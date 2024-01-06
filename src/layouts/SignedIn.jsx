import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://png.pngtree.com/png-clipart/20230427/ourlarge/pngtree-cartoon-character-hand-made-animation-model-png-image_6738199.png"></Image>
            <Dropdown pointing="top left" text='Nursel'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
