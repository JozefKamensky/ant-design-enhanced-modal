import * as React from 'react'
import { render } from 'react-testing-library'
import { DraggableModalProvider } from './DraggableModalProvider'
import { DraggableModal } from './DraggableModal'

test('renders', () => {
    render(
        <DraggableModalProvider>
            <DraggableModal visible />
        </DraggableModalProvider>,
    )
    expect(document.body).toMatchInlineSnapshot(`
<body
  style="padding-right: 0px; overflow: hidden;"
>
  <div />
  <div>
    <div>
      <div
        aria-labelledby="rcDialogTitle0"
        class="ant-modal-wrap ant-design-draggable-modal"
        role="dialog"
        style="z-index: 2;"
        tabindex="-1"
      >
        <div
          class="ant-modal zoom-appear"
          role="document"
          style="margin: 0px; padding-bottom: 0px; pointer-events: auto; top: 0px; left: 112px; height: 768px; width: 800px;"
        >
          <div
            style="width: 0px; height: 0px; overflow: hidden;"
            tabindex="0"
          >
            sentinelStart
          </div>
          <div
            class="ant-modal-content"
          >
            <button
              aria-label="Close"
              class="ant-modal-close"
            >
              <span
                class="ant-modal-close-x"
              >
                <i
                  aria-label="icon: close"
                  class="anticon anticon-close ant-modal-close-icon"
                >
                  <svg
                    aria-hidden="true"
                    class=""
                    data-icon="close"
                    fill="currentColor"
                    height="1em"
                    viewBox="64 64 896 896"
                    width="1em"
                  >
                    <path
                      d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                    />
                  </svg>
                </i>
              </span>
            </button>
            <div
              class="ant-modal-header"
            >
              <div
                class="ant-modal-title"
                id="rcDialogTitle0"
              >
                <div
                  class="ant-design-draggable-modal-title"
                />
              </div>
            </div>
            <div
              class="ant-modal-body"
            >
              <div
                class="ant-design-draggable-modal-resize-handle"
              >
                <div
                  class="ant-design-draggable-modal-resize-handle-inner"
                />
              </div>
            </div>
            <div
              class="ant-modal-footer"
            >
              <div>
                <button
                  class="ant-btn"
                  type="button"
                >
                  <span>
                    Cancel
                  </span>
                </button>
                <button
                  class="ant-btn ant-btn-primary"
                  type="button"
                >
                  <span>
                    OK
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div
            style="width: 0px; height: 0px; overflow: hidden;"
            tabindex="0"
          >
            sentinelEnd
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
`)
})
