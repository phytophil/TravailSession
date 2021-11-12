import {Menu, MenuItem} from '@blueprintjs/core';
import {ContextMenu2} from '@blueprintjs/popover2';

const ContextMenuExample = document.getElementbyId("") {
  return (
    <ContextMenu2
      content={
        <Menu>
          <MenuItem text="Save" />
          <MenuItem text="Save as..." />
          <MenuItem text="Delete..." intent="danger" />
        </Menu>
      }>
      <div className="my-context-menu-target">Right click me!</div>
    </ContextMenu2>
  );
}
