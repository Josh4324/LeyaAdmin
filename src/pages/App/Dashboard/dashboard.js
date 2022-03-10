import React, { useEffect } from "react";
import Sidebar from "../../../components/layout/sidebar";
import Sidenav from "../../../components/layout/sidenav";
import Topbar from "../../../components/layout/topbar";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../../redux/Auth/authActions";

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div>
      <Topbar />
      <Sidenav />
      <div class="content js-content text-danger">
        <div className="container-xxl">
          <div className="row">
            <div class="col-xxl-4">
              <div class="card card-xxl-stretch">
                <div class="card-header align-items-center border-0 mt-4">
                  <h3 class="card-title align-items-start flex-column">
                    <span class="fw-bolder mb-2 text-dark">Request Status</span>
                    <span class="text-muted fw-bold fs-7">890,344 Sales</span>
                  </h3>

                  <div class="card-toolbar">
                    <button
                      type="button"
                      class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      <span class="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              x="5"
                              y="5"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                            />
                            <rect
                              x="14"
                              y="5"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <rect
                              x="5"
                              y="14"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <rect
                              x="14"
                              y="14"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                <div class="card-body pt-5">
                  <div class="timeline-label">
                    <div class="timeline-item">
                      <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        08:42
                      </div>

                      <div class="timeline-badge">
                        <i class="fa fa-genderless text-warning fs-1"></i>
                      </div>

                      <div class="fw-mormal timeline-content text-muted ps-3">
                        Outlines keep you honest. And keep structure
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        10:00
                      </div>

                      <div class="timeline-badge">
                        <i class="fa fa-genderless text-success fs-1"></i>
                      </div>

                      <div class="timeline-content d-flex">
                        <span class="fw-bolder text-gray-800 ps-3">
                          AEOL meeting
                        </span>
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        14:37
                      </div>

                      <div class="timeline-badge">
                        <i class="fa fa-genderless text-danger fs-1"></i>
                      </div>

                      <div class="timeline-content fw-bolder text-gray-800 ps-3">
                        Make deposit
                        <a href="#" class="text-primary">
                          USD 700
                        </a>
                        . to ESL
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        16:50
                      </div>

                      <div class="timeline-badge">
                        <i class="fa fa-genderless text-primary fs-1"></i>
                      </div>

                      <div class="timeline-content fw-mormal text-muted ps-3">
                        Indulging in poorly driving and keep structure keep
                        great
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        21:03
                      </div>

                      <div class="timeline-badge">
                        <i class="fa fa-genderless text-danger fs-1"></i>
                      </div>

                      <div class="timeline-content fw-bold text-gray-800 ps-3">
                        New order placed
                        <a href="#" class="text-primary">
                          #XF-2356
                        </a>
                        .
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        16:50
                      </div>

                      <div class="timeline-badge">
                        <i class="fa fa-genderless text-primary fs-1"></i>
                      </div>

                      <div class="timeline-content fw-mormal text-muted ps-3">
                        Indulging in poorly driving and keep structure keep
                        great
                      </div>
                    </div>

                    <div class="timeline-item">
                      <div class="timeline-label fw-bolder text-gray-800 fs-6">
                        21:03
                      </div>

                      <div class="timeline-badge">
                        <i class="fa fa-genderless text-danger fs-1"></i>
                      </div>

                      <div class="timeline-content fw-bold text-gray-800 ps-3">
                        New order placed
                        <a href="#" class="text-primary">
                          #XF-2356
                        </a>
                        .
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>

            <div class="col-xl-4">
              <div class="card card-xl-stretch mb-xl-8">
                <div class="card-header border-0">
                  <h3 class="card-title fw-bolder text-dark">Notifications</h3>
                  <div class="card-toolbar">
                    <button
                      type="button"
                      class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      <span class="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              x="5"
                              y="5"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                            ></rect>
                            <rect
                              x="14"
                              y="5"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                              opacity="0.3"
                            ></rect>
                            <rect
                              x="5"
                              y="14"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                              opacity="0.3"
                            ></rect>
                            <rect
                              x="14"
                              y="14"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                              opacity="0.3"
                            ></rect>
                          </g>
                        </svg>
                      </span>
                    </button>
                    <div
                      class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                      data-kt-menu="true"
                    >
                      <div class="menu-item px-3">
                        <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                          Payments
                        </div>
                      </div>
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-3">
                          Create Invoice
                        </a>
                      </div>

                      <div class="menu-item px-3">
                        <a href="#" class="menu-link flex-stack px-3">
                          Create Payment
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title=""
                            data-bs-original-title="Specify a target name for future usage and reference"
                            aria-label="Specify a target name for future usage and reference"
                          ></i>
                        </a>
                      </div>

                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-3">
                          Generate Bill
                        </a>
                      </div>

                      <div
                        class="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="right-end"
                      >
                        <a href="#" class="menu-link px-3">
                          <span class="menu-title">Subscription</span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="menu-sub menu-sub-dropdown w-175px py-4">
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">
                              Plans
                            </a>
                          </div>

                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">
                              Billing
                            </a>
                          </div>

                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">
                              Statements
                            </a>
                          </div>

                          <div class="separator my-2"></div>

                          <div class="menu-item px-3">
                            <div class="menu-content px-3">
                              <label class="form-check form-switch form-check-custom form-check-solid">
                                <input
                                  class="form-check-input w-30px h-20px"
                                  type="checkbox"
                                  value="1"
                                  checked="checked"
                                  name="notifications"
                                />

                                <span class="form-check-label text-muted fs-6">
                                  Recuring
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="menu-item px-3 my-1">
                        <a href="#" class="menu-link px-3">
                          Settings
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-body pt-0">
                  <div class="d-flex align-items-center bg-light-warning rounded p-5 mb-7">
                    <span class="svg-icon svg-icon-warning me-5">
                      <span class="svg-icon svg-icon-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                            fill="black"
                          ></path>
                          <path
                            d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                            fill="black"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <div class="flex-grow-1 me-2">
                      <a
                        href="#"
                        class="fw-bolder text-gray-800 text-hover-primary fs-6"
                      >
                        Group lunch celebration
                      </a>
                      <span class="text-muted fw-bold d-block">
                        Due in 2 Days
                      </span>
                    </div>
                    <span class="fw-bolder text-warning py-1">+28%</span>{" "}
                  </div>

                  <div class="d-flex align-items-center bg-light-success rounded p-5 mb-7">
                    <span class="svg-icon svg-icon-success me-5">
                      <span class="svg-icon svg-icon-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                            fill="black"
                          ></path>
                          <path
                            d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                            fill="black"
                          ></path>
                        </svg>
                      </span>
                    </span>

                    <div class="flex-grow-1 me-2">
                      <a
                        href="#"
                        class="fw-bolder text-gray-800 text-hover-primary fs-6"
                      >
                        Navigation optimization
                      </a>
                      <span class="text-muted fw-bold d-block">
                        Due in 2 Days
                      </span>
                    </div>

                    <span class="fw-bolder text-success py-1">+50%</span>
                  </div>

                  <div class="d-flex align-items-center bg-light-danger rounded p-5 mb-7">
                    <span class="svg-icon svg-icon-danger me-5">
                      <span class="svg-icon svg-icon-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                            fill="black"
                          ></path>
                          <path
                            d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                            fill="black"
                          ></path>
                        </svg>
                      </span>
                    </span>

                    <div class="flex-grow-1 me-2">
                      <a
                        href="#"
                        class="fw-bolder text-gray-800 text-hover-primary fs-6"
                      >
                        Rebrand strategy planning
                      </a>
                      <span class="text-muted fw-bold d-block">
                        Due in 5 Days
                      </span>
                    </div>

                    <span class="fw-bolder text-danger py-1">-27%</span>
                  </div>

                  <div class="d-flex align-items-center bg-light-info rounded p-5">
                    <span class="svg-icon svg-icon-info me-5">
                      <span class="svg-icon svg-icon-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            opacity="0.3"
                            d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                            fill="black"
                          ></path>
                          <path
                            d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                            fill="black"
                          ></path>
                        </svg>
                      </span>
                    </span>

                    <div class="flex-grow-1 me-2">
                      <a
                        href="#"
                        class="fw-bolder text-gray-800 text-hover-primary fs-6"
                      >
                        Product goals strategy
                      </a>
                      <span class="text-muted fw-bold d-block">
                        Due in 7 Days
                      </span>
                    </div>

                    <span class="fw-bolder text-info py-1">+8%</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4">
              <div class="card card-xl-stretch mb-xl-8">
                <div class="card-header border-0">
                  <h3 class="card-title fw-bolder text-dark">Todo</h3>
                  <div class="card-toolbar">
                    <button
                      type="button"
                      class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      <span class="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              x="5"
                              y="5"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                            ></rect>
                            <rect
                              x="14"
                              y="5"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                              opacity="0.3"
                            ></rect>
                            <rect
                              x="5"
                              y="14"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                              opacity="0.3"
                            ></rect>
                            <rect
                              x="14"
                              y="14"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                              opacity="0.3"
                            ></rect>
                          </g>
                        </svg>
                      </span>
                    </button>
                    <div
                      class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                      data-kt-menu="true"
                    >
                      <div class="menu-item px-3">
                        <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                          Payments
                        </div>
                      </div>

                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-3">
                          Create Invoice
                        </a>
                      </div>

                      <div class="menu-item px-3">
                        <a href="#" class="menu-link flex-stack px-3">
                          Create Payment
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title=""
                            data-bs-original-title="Specify a target name for future usage and reference"
                            aria-label="Specify a target name for future usage and reference"
                          ></i>
                        </a>
                      </div>

                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-3">
                          Generate Bill
                        </a>
                      </div>

                      <div
                        class="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="right-end"
                      >
                        <a href="#" class="menu-link px-3">
                          <span class="menu-title">Subscription</span>
                          <span class="menu-arrow"></span>
                        </a>
                        <div class="menu-sub menu-sub-dropdown w-175px py-4">
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">
                              Plans
                            </a>
                          </div>

                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">
                              Billing
                            </a>
                          </div>

                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">
                              Statements
                            </a>
                          </div>

                          <div class="separator my-2"></div>

                          <div class="menu-item px-3">
                            <div class="menu-content px-3">
                              <label class="form-check form-switch form-check-custom form-check-solid">
                                <input
                                  class="form-check-input w-30px h-20px"
                                  type="checkbox"
                                  value="1"
                                  checked="checked"
                                  name="notifications"
                                />

                                <span class="form-check-label text-muted fs-6">
                                  Recuring
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="menu-item px-3 my-1">
                        <a href="#" class="menu-link px-3">
                          Settings
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-body pt-2">
                  <div class="d-flex align-items-center mb-8">
                    <span class="bullet bullet-vertical h-40px bg-success"></span>

                    <div class="form-check form-check-custom form-check-solid mx-5">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>

                    <div class="flex-grow-1">
                      <a
                        href="#"
                        class="text-gray-800 text-hover-primary fw-bolder fs-6"
                      >
                        Create FireStone Logo
                      </a>
                      <span class="text-muted fw-bold d-block">
                        Due in 2 Days
                      </span>
                    </div>
                    <span class="badge badge-light-success fs-8 fw-bolder">
                      New
                    </span>
                  </div>
                  <div class="d-flex align-items-center mb-8">
                    <span class="bullet bullet-vertical h-40px bg-primary"></span>

                    <div class="form-check form-check-custom form-check-solid mx-5">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>

                    <div class="flex-grow-1">
                      <a
                        href="#"
                        class="text-gray-800 text-hover-primary fw-bolder fs-6"
                      >
                        Stakeholder Meeting
                      </a>
                      <span class="text-muted fw-bold d-block">
                        Due in 3 Days
                      </span>
                    </div>
                    <span class="badge badge-light-primary fs-8 fw-bolder">
                      New
                    </span>
                  </div>
                  <div class="d-flex align-items-center mb-8">
                    <span class="bullet bullet-vertical h-40px bg-primary"></span>

                    <div class="form-check form-check-custom form-check-solid mx-5">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>

                    <div class="flex-grow-1">
                      <a
                        href="#"
                        class="text-gray-800 text-hover-primary fw-bolder fs-6"
                      >
                        KPI App Showcase
                      </a>
                      <span class="text-muted fw-bold d-block">
                        Due in 2 Days
                      </span>
                    </div>
                    <span class="badge badge-light-primary fs-8 fw-bolder">
                      New
                    </span>
                  </div>
                  <div class="d-flex align-items-center mb-8">
                    <span class="bullet bullet-vertical h-40px bg-danger"></span>

                    <div class="form-check form-check-custom form-check-solid mx-5">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>

                    <div class="flex-grow-1">
                      <a
                        href="#"
                        class="text-gray-800 text-hover-primary fw-bolder fs-6"
                      >
                        Project Meeting
                      </a>
                      <span class="text-muted fw-bold d-block">
                        Due in 12 Days
                      </span>
                    </div>
                    <span class="badge badge-light-danger fs-8 fw-bolder">
                      New
                    </span>
                  </div>
                  <div class="d-flex align-items-center">
                    <span class="bullet bullet-vertical h-40px bg-success"></span>

                    <div class="form-check form-check-custom form-check-solid mx-5">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>

                    <div class="flex-grow-1">
                      <a
                        href="#"
                        class="text-gray-800 text-hover-primary fw-bolder fs-6"
                      >
                        Customers Update
                      </a>
                      <span class="text-muted fw-bold d-block">
                        Due in 1 week
                      </span>
                    </div>
                    <span class="badge badge-light-success fs-8 fw-bolder">
                      New
                    </span>
                  </div>
                  <br /> <br />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div class="col-xl-12">
              <div class="card card-xl-stretch mb-5 mb-xl-8">
                <div class="card-header border-0 pt-5">
                  <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bolder fs-3 mb-1">
                      Customers
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      Over 500 customers
                    </span>
                  </h3>
                  <div
                    class="card-toolbar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-trigger="hover"
                    title=""
                    data-bs-original-title="Click to add a user"
                  >
                    <a
                      href="#"
                      class="btn btn-sm btn-light btn-active-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_invite_friends"
                    >
                      <span class="svg-icon svg-icon-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width="16"
                            height="2"
                            rx="1"
                            transform="rotate(-90 11.364 20.364)"
                            fill="black"
                          ></rect>
                          <rect
                            x="4.36396"
                            y="11.364"
                            width="16"
                            height="2"
                            rx="1"
                            fill="black"
                          ></rect>
                        </svg>
                      </span>
                      New Customer
                    </a>
                  </div>
                </div>

                <div class="card-body py-3">
                  <div class="table-responsive">
                    <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                      <thead>
                        <tr class="fw-bolder text-muted">
                          <th class="w-25px">
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="1"
                                data-kt-check="true"
                              />
                            </div>
                          </th>
                          <th class="min-w-150px">Name</th>
                          <th class="min-w-140px">Email</th>
                          <th class="min-w-120px">Onboarding</th>
                          <th class="min-w-100px text-end">Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                class="form-check-input widget-9-check"
                                type="checkbox"
                                value="1"
                              />
                            </div>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="symbol symbol-45px me-5">
                                {/* <img
                                  src="assets/media/avatars/150-11.jpg"
                                  alt=""
                                /> */}
                              </div>
                              <div class="d-flex justify-content-start flex-column">
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary fs-6"
                                >
                                  Ana Simmons
                                </a>
                                {/* <span class="text-muted fw-bold text-muted d-block fs-7">
                                  annas@gmail.com
                                </span> */}
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#"
                              class="text-dark fw-bolder text-hover-primary d-block fs-6"
                            >
                              annas@gmail.com
                            </a>
                            {/* <span class="text-muted fw-bold text-muted d-block fs-7">
                              seeroma@gmail.com
                            </span> */}
                          </td>
                          <td class="text-end">
                            <div class="d-flex flex-column w-100 me-2">
                              <div class="d-flex flex-stack mb-2">
                                <span class="text-muted me-2 fs-7 fw-bold">
                                  50%
                                </span>
                              </div>
                              <div class="progress h-6px w-100">
                                <div
                                  class="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="d-flex justify-content-end flex-shrink-0">
                              <a
                                href="#"
                                class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                              >
                                <span class="svg-icon svg-icon-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                      fill="black"
                                    ></path>
                                    <path
                                      opacity="0.3"
                                      d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                      fill="black"
                                    ></path>
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="#"
                                class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                              >
                                <span class="svg-icon svg-icon-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      opacity="0.3"
                                      d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                      fill="black"
                                    ></path>
                                    <path
                                      d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                      fill="black"
                                    ></path>
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="#"
                                class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                              >
                                <span class="svg-icon svg-icon-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                      fill="black"
                                    ></path>
                                    <path
                                      opacity="0.5"
                                      d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                      fill="black"
                                    ></path>
                                    <path
                                      opacity="0.5"
                                      d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                      fill="black"
                                    ></path>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                class="form-check-input widget-9-check"
                                type="checkbox"
                                value="1"
                              />
                            </div>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="symbol symbol-45px me-5">
                                {/* <img
                                  src="assets/media/avatars/150-11.jpg"
                                  alt=""
                                /> */}
                              </div>
                              <div class="d-flex justify-content-start flex-column">
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary fs-6"
                                >
                                  Ciroma Adekunle
                                </a>
                                {/* <span class="text-muted fw-bold text-muted d-block fs-7">
                                  HTML, JS, ReactJS
                                </span> */}
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#"
                              class="text-dark fw-bolder text-hover-primary d-block fs-6"
                            >
                              seeroma@gmail.com
                            </a>
                            {/* <span class="text-muted fw-bold text-muted d-block fs-7">
                              Web, UI/UX Design
                            </span> */}
                          </td>
                          <td class="text-end">
                            <div class="d-flex flex-column w-100 me-2">
                              <div class="d-flex flex-stack mb-2">
                                <span class="text-muted me-2 fs-7 fw-bold">
                                  50%
                                </span>
                              </div>
                              <div class="progress h-6px w-100">
                                <div
                                  class="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="d-flex justify-content-end flex-shrink-0">
                              <a
                                href="#"
                                class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                              >
                                <span class="svg-icon svg-icon-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                      fill="black"
                                    ></path>
                                    <path
                                      opacity="0.3"
                                      d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                      fill="black"
                                    ></path>
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="#"
                                class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                              >
                                <span class="svg-icon svg-icon-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      opacity="0.3"
                                      d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                      fill="black"
                                    ></path>
                                    <path
                                      d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                      fill="black"
                                    ></path>
                                  </svg>
                                </span>
                              </a>
                              <a
                                href="#"
                                class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                              >
                                <span class="svg-icon svg-icon-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                      fill="black"
                                    ></path>
                                    <path
                                      opacity="0.5"
                                      d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                      fill="black"
                                    ></path>
                                    <path
                                      opacity="0.5"
                                      d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                      fill="black"
                                    ></path>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div class="col-xxl-12">
              <div class="card card-xxl-stretch mb-5 mb-xl-8">
                <div class="card-header border-0 pt-5">
                  <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bolder fs-3 mb-1">
                      Latest Loan Applications
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      3 new loan applications
                    </span>
                  </h3>
                  <div class="card-toolbar">
                    <ul class="nav">
                      <li class="nav-item">
                        <a
                          class="nav-link btn btn-sm btn-color-muted btn-active btn-active-dark fw-bolder px-4 me-1 active"
                          data-bs-toggle="tab"
                          href="#kt_table_widget_5_tab_1"
                        >
                          Month
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link btn btn-sm btn-color-muted btn-active btn-active-dark fw-bolder px-4 me-1"
                          data-bs-toggle="tab"
                          href="#kt_table_widget_5_tab_2"
                        >
                          Week
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link btn btn-sm btn-color-muted btn-active btn-active-dark fw-bolder px-4"
                          data-bs-toggle="tab"
                          href="#kt_table_widget_5_tab_3"
                        >
                          Day
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="card-body py-3">
                  <div class="tab-content">
                    <div
                      class="tab-pane fade active show"
                      id="kt_table_widget_5_tab_1"
                    >
                      <div class="table-responsive">
                        <table class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                          <thead>
                            <tr class="border-0">
                              <th class="p-0 w-50px"></th>
                              <th class="p-0 min-w-150px"></th>
                              <th class="p-0 min-w-140px"></th>
                              <th class="p-0 min-w-110px"></th>
                              <th class="p-0 min-w-50px"></th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>
                                <div class="symbol symbol-45px me-2">
                                  <span class="symbol-label">
                                    <img
                                      src="assets/media/svg/brand-logos/plurk.svg"
                                      class="h-50 align-self-center"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                >
                                  Brad Simmons
                                </a>
                                {/* <span class="text-muted fw-bold d-block">
                                  Movie Creator
                                </span> */}
                              </td>
                              <td class="text-end text-black fw-bold">
                                #500,000
                              </td>
                              <td class="text-end">
                                <span class="badge badge-light-success">
                                  Approved
                                </span>
                              </td>
                              <td class="text-end">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                >
                                  <span class="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="18"
                                        y="13"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        transform="rotate(-180 18 13)"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="symbol symbol-45px me-2">
                                  <span class="symbol-label">
                                    <img
                                      src="assets/media/svg/brand-logos/telegram.svg"
                                      class="h-50 align-self-center"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                >
                                  Ciroma Adekunle
                                </a>
                                {/* <span class="text-muted fw-bold d-block">
                                  Most Successful
                                </span> */}
                              </td>
                              <td class="text-end text-black fw-bold">
                                #10,000,000
                              </td>
                              <td class="text-end">
                                <span class="badge badge-light-warning">
                                  In Progress
                                </span>
                              </td>
                              <td class="text-end">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                >
                                  <span class="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="18"
                                        y="13"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        transform="rotate(-180 18 13)"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="symbol symbol-45px me-2">
                                  <span class="symbol-label">
                                    <img
                                      src="assets/media/svg/brand-logos/vimeo.svg"
                                      class="h-50 align-self-center"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                >
                                  Anna Simmons
                                </a>
                                {/* <span class="text-muted fw-bold d-block">
                                  Awesome Users
                                </span> */}
                              </td>
                              <td class="text-end text-black fw-bold">
                                #100,000
                              </td>
                              <td class="text-end">
                                <span class="badge badge-light-primary">
                                  Success
                                </span>
                              </td>
                              <td class="text-end">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                >
                                  <span class="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="18"
                                        y="13"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        transform="rotate(-180 18 13)"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="tab-pane fade" id="kt_table_widget_5_tab_2">
                      <div class="table-responsive">
                        <table class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                          <thead>
                            <tr class="border-0">
                              <th class="p-0 w-50px"></th>
                              <th class="p-0 min-w-150px"></th>
                              <th class="p-0 min-w-140px"></th>
                              <th class="p-0 min-w-110px"></th>
                              <th class="p-0 min-w-50px"></th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>
                                <div class="symbol symbol-45px me-2">
                                  <span class="symbol-label">
                                    <img
                                      src="assets/media/svg/brand-logos/plurk.svg"
                                      class="h-50 align-self-center"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                >
                                  Brad Simmons
                                </a>
                                {/* <span class="text-muted fw-bold d-block">
                                  Movie Creator
                                </span> */}
                              </td>
                              <td class="text-end text-muted fw-bold">
                                500,000
                              </td>
                              <td class="text-end">
                                <span class="badge badge-light-success">
                                  Approved
                                </span>
                              </td>
                              <td class="text-end">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                >
                                  <span class="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="18"
                                        y="13"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        transform="rotate(-180 18 13)"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="symbol symbol-45px me-2">
                                  <span class="symbol-label">
                                    <img
                                      src="assets/media/svg/brand-logos/telegram.svg"
                                      class="h-50 align-self-center"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                >
                                  Popular Authors
                                </a>
                                <span class="text-muted fw-bold d-block">
                                  Most Successful
                                </span>
                              </td>
                              <td class="text-end text-muted fw-bold">
                                Python, MySQL
                              </td>
                              <td class="text-end">
                                <span class="badge badge-light-warning">
                                  In Progress
                                </span>
                              </td>
                              <td class="text-end">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                >
                                  <span class="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="18"
                                        y="13"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        transform="rotate(-180 18 13)"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="symbol symbol-45px me-2">
                                  <span class="symbol-label">
                                    <img
                                      src="assets/media/svg/brand-logos/bebo.svg"
                                      class="h-50 align-self-center"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                >
                                  Active Customers
                                </a>
                                <span class="text-muted fw-bold d-block">
                                  Movie Creator
                                </span>
                              </td>
                              <td class="text-end text-muted fw-bold">
                                AngularJS, C#
                              </td>
                              <td class="text-end">
                                <span class="badge badge-light-danger">
                                  Rejected
                                </span>
                              </td>
                              <td class="text-end">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                >
                                  <span class="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="18"
                                        y="13"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        transform="rotate(-180 18 13)"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div class="tab-pane fade" id="kt_table_widget_5_tab_3">
                      <div class="table-responsive">
                        <table class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                          <thead>
                            <tr class="border-0">
                              <th class="p-0 w-50px"></th>
                              <th class="p-0 min-w-150px"></th>
                              <th class="p-0 min-w-140px"></th>
                              <th class="p-0 min-w-110px"></th>
                              <th class="p-0 min-w-50px"></th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>
                                <div class="symbol symbol-45px me-2">
                                  <span class="symbol-label">
                                    <img
                                      src="assets/media/svg/brand-logos/kickstarter.svg"
                                      class="h-50 align-self-center"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                >
                                  Bestseller Theme
                                </a>
                                <span class="text-muted fw-bold d-block">
                                  Best Customers
                                </span>
                              </td>
                              <td class="text-end text-muted fw-bold">
                                ReactJS, Ruby
                              </td>
                              <td class="text-end">
                                <span class="badge badge-light-warning">
                                  In Progress
                                </span>
                              </td>
                              <td class="text-end">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                >
                                  <span class="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="18"
                                        y="13"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        transform="rotate(-180 18 13)"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="symbol symbol-45px me-2">
                                  <span class="symbol-label">
                                    <img
                                      src="assets/media/svg/brand-logos/bebo.svg"
                                      class="h-50 align-self-center"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                >
                                  Active Customers
                                </a>
                                <span class="text-muted fw-bold d-block">
                                  Movie Creator
                                </span>
                              </td>
                              <td class="text-end text-muted fw-bold">
                                AngularJS, C#
                              </td>
                              <td class="text-end">
                                <span class="badge badge-light-danger">
                                  Rejected
                                </span>
                              </td>
                              <td class="text-end">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                >
                                  <span class="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="18"
                                        y="13"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        transform="rotate(-180 18 13)"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="symbol symbol-45px me-2">
                                  <span class="symbol-label">
                                    <img
                                      src="assets/media/svg/brand-logos/vimeo.svg"
                                      class="h-50 align-self-center"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                >
                                  New Users
                                </a>
                                <span class="text-muted fw-bold d-block">
                                  Awesome Users
                                </span>
                              </td>
                              <td class="text-end text-muted fw-bold">
                                Laravel,Metronic
                              </td>
                              <td class="text-end">
                                <span class="badge badge-light-primary">
                                  Success
                                </span>
                              </td>
                              <td class="text-end">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                >
                                  <span class="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="18"
                                        y="13"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        transform="rotate(-180 18 13)"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="symbol symbol-45px me-2">
                                  <span class="symbol-label">
                                    <img
                                      src="assets/media/svg/brand-logos/telegram.svg"
                                      class="h-50 align-self-center"
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                >
                                  Popular Authors
                                </a>
                                <span class="text-muted fw-bold d-block">
                                  Most Successful
                                </span>
                              </td>
                              <td class="text-end text-muted fw-bold">
                                Python, MySQL
                              </td>
                              <td class="text-end">
                                <span class="badge badge-light-warning">
                                  In Progress
                                </span>
                              </td>
                              <td class="text-end">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                >
                                  <span class="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x="18"
                                        y="13"
                                        width="13"
                                        height="2"
                                        rx="1"
                                        transform="rotate(-180 18 13)"
                                        fill="black"
                                      ></rect>
                                      <path
                                        d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                        fill="black"
                                      ></path>
                                    </svg>
                                  </span>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div class="js-fake-scroll"></div> */
}
