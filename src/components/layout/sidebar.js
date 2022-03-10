import React from 'react';
import LeyaLogo from '../../assets/leya.svg';

export default function Sidebar() {
  return (
    <>
      <div
        id="kt_aside"
        class="aside aside-dark aside-hoverable fixed"
        style={{ height: '100vh' }}
      >
        <div class="aside-logo flex-column-auto" id="kt_aside_logo">
          <a href="/">
            <img alt="Logo" src={LeyaLogo} class="h-30px logo" />
          </a>
          <div
            id="kt_aside_toggle"
            class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
            data-kt-toggle="true"
            data-kt-toggle-state="active"
            data-kt-toggle-target="body"
            data-kt-toggle-name="aside-minimize"
          >
            <span class="svg-icon svg-icon-1 rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.5"
                  d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                  fill="black"
                />
                <path
                  d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* menu starts */}
        <div class="aside-menu flex-column-fluid">
          <div
            class="hover-scroll-overlay-y my-5 my-lg-5"
            id="kt_aside_menu_wrapper"
            data-kt-scroll="true"
            data-kt-scroll-activate="{default: false, lg: true}"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
            data-kt-scroll-wrappers="#kt_aside_menu"
            data-kt-scroll-offset="0"
          >
            <div
              class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
              id="#kt_aside_menu"
              data-kt-menu="true"
            >
              <div class="menu-item">
                <div class="menu-content pb-2">
                  <span class="menu-section text-muted text-uppercase fs-8 ls-1">
                    Dashboard
                  </span>
                </div>
              </div>

              <div class="menu-item">
                <a class="menu-link active" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">Home</span>
                </a>
              </div>

              <div class="menu-item">
                <div class="menu-content pb-2">
                  <span class="menu-section text-muted text-uppercase fs-8 ls-1">
                    CUSTOMERS
                  </span>
                </div>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">View Customers</span>
                </a>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">Edit Customers</span>
                </a>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">Create Customers</span>
                </a>
              </div>

              <div class="menu-item">
                <div class="menu-content pb-2">
                  <span class="menu-section text-muted text-uppercase fs-8 ls-1">
                    LOANS
                  </span>
                </div>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">Loan Requests</span>
                </a>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">View Loans</span>
                </a>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">Approve Loans</span>
                </a>
              </div>

              <div class="menu-item">
                <div class="menu-content pb-2">
                  <span class="menu-section text-muted text-uppercase fs-8 ls-1">
                    Investments
                  </span>
                </div>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">Investment Requests</span>
                </a>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">View Investments</span>
                </a>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">Approve Investments</span>
                </a>
              </div>

              <div class="menu-item">
                <div class="menu-content pb-2">
                  <span class="menu-section text-muted text-uppercase fs-8 ls-1">
                    Trust Fund
                  </span>
                </div>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">Trust Fund Requests</span>
                </a>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">View Trust Fund</span>
                </a>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">Approve Trust Fund</span>
                </a>
              </div>

              <div class="menu-item">
                <div class="menu-content pb-2">
                  <span class="menu-section text-muted text-uppercase fs-8 ls-1">
                    Administrator
                  </span>
                </div>
              </div>

              <div class="menu-item">
                <a class="menu-link" href="../../demo1/dist/index.html">
                  <span class="menu-icon">
                    <span class="svg-icon svg-icon-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="2"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="13"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x="2"
                          y="13"
                          width="9"
                          height="9"
                          rx="2"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                  <span class="menu-title">Administrator</span>
                </a>
              </div>

              <div class="menu-item">
                <div class="menu-content">
                  <div class="separator mx-1 my-4"></div>
                </div>
              </div>

              <div
                class="aside-footer flex-column-auto pt-5 pb-7 px-5"
                id="kt_aside_footer"
              >
                <a
                  href="../../demo1/dist/documentation/getting-started.html"
                  class="btn  btn-danger w-100"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-dismiss-="click"
                  title="200+ in-house components and 3rd-party plugins"
                >
                  <span class="btn-label">Logout</span>{' '}
                  <span class="svg-icon btn-icon svg-icon-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
