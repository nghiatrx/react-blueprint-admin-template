import React, { Component } from 'react';
import menu from '../template/menu'
import { Icon, Tooltip, Position} from '@blueprintjs/core'
import { Link } from '@reach/router'

function Header() {
  return (
    <ul className="header">
      <li>
        {
          menu.header.text ? (
            <Tooltip
              content={<span>{menu.header.text}</span>}
              position={Position.RIGHT}
              usePortal={false}>
              <Link to={menu.header.link}>
                {
                  menu.header.type == 'icon' ? (
                    <Icon icon={menu.header.content}/>
                  ) : (
                    <img src={menu.header.content} />
                  )
                }
              </Link>
              </Tooltip>
          ) : (
            <Link to={menu.header.link}>
                {
                  menu.header.type == 'icon' ? (
                    <Icon icon={menu.header.content}/>
                  ) : (
                    <img src={menu.header.content} />
                  )
                }
            </Link>
          )
        }

      </li>
    </ul>
  )
}

function Top() {
  return (
    <ul className="top">
      {
        menu.top.map((item, index) => {
          return (
            <li key={index}>
            {
              item.text ? (
                <Tooltip
                  content={<span>{item.text}</span>}
                  position={Position.RIGHT}
                  usePortal={false}>
                  <Link to={item.link}>
                    {
                      item.type == 'icon' ? (
                        <Icon icon={item.content}/>
                      ) : (
                        <img src={item.content} />
                      )
                    }
                  </Link>
                  </Tooltip>
              ) : (
                <div></div>
              )
            }
            </li>
          )
        })
      }
    </ul>
  )
}

class MenuComponent extends Component {
  render() {
    return (
      <div className="menuComponent">
        <Header/>
        <Top/>
      </div>
    );
  }
}

export default MenuComponent;
