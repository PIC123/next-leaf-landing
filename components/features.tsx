export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Crafting Experiences that Inspire and Transform</h2>
            <p className="text-xl text-gray-400">Our mission is to create immersive and interactive experiences that weave together new technologies with narrative, sparking curiosity and wonder. We are committed to exploring the intersection of art and technology, using it as a platform to tell stories, provoke thought, and evoke emotion.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-4"  viewBox="0 0 64 64">
                <title>{"projection-screen-present-data-chart"}</title>
                <rect className="fill-current text-green-600" width="64" height="64" rx="32" />
                <path className="stroke-green-600 fill-current text-green-100" transform="translate(8 5) scale(0.75 0.75)" d="M32 39a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
                <path className="stroke-green-600 fill-current text-green-100" transform="translate(8 5) scale(0.75 0.75)" d="m59.22 50.954-.19-12a3.02 3.02 0 0 0-3-2.951h-19.7a9.874 9.874 0 0 0-8.66 0H8.03a2.993 2.993 0 0 0-3 3.046l.19 11.991a3 3 0 0 0 3 2.96H13v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2h12.67a9.874 9.874 0 0 0 8.66 0H49v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2h5.22a3.007 3.007 0 0 0 3-3.046ZM16 58v2h-4v-2Zm-7.78-6a1 1 0 0 1-1-.985l-.19-12a.987.987 0 0 1 .282-.713A1 1 0 0 1 8.03 38h16.841a9.969 9.969 0 0 0 0 14ZM32 53a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Zm20 5v2h-4v-2Zm4.927-6.3a.991.991 0 0 1-.707.3H39.129a9.969 9.969 0 0 0 0-14h16.9a1.007 1.007 0 0 1 1 .985l.19 11.994a1.009 1.009 0 0 1-.292.721Z" />
                <path className="stroke-green-600 fill-current text-green-100" transform="translate(8 5) scale(0.75 0.75)" d="M11 40h8v2h-8zM11 44h8v2h-8zM11 48h8v2h-8zM45 40h8v2h-8zM45 44h8v2h-8zM45 48h8v2h-8zM38.928 9.65a.971.971 0 0 0-.068-.155.952.952 0 0 0-.065-.088 1 1 0 0 0-.1-.118 1.077 1.077 0 0 0-.091-.073.886.886 0 0 0-.082-.067c-.013-.008-.028-.011-.042-.019s-.022-.018-.036-.025l-6-3a1 1 0 0 0-.894 0l-6 3c-.013.007-.023.018-.036.025s-.029.011-.042.019c-.031.019-.054.045-.082.066a1.1 1.1 0 0 0-.091.075 1.083 1.083 0 0 0-.1.116c-.022.03-.046.057-.065.089a1.013 1.013 0 0 0-.068.154.831.831 0 0 0-.035.087A1.008 1.008 0 0 0 25 10v7a1 1 0 0 0 .553.895l6 3c.014.007.031 0 .046.01a.894.894 0 0 0 .8 0c.015-.006.032 0 .046-.01l6-3A1 1 0 0 0 39 17v-7a1.021 1.021 0 0 0-.037-.265.893.893 0 0 0-.035-.085ZM31 18.382l-4-2v-4.764l4 2Zm1-6.5L28.236 10 32 8.118 35.764 10Zm5 4.5-4 2v-4.764l4-2Z" />
                <path className="stroke-green-600 fill-current text-green-100" transform="translate(8 5) scale(0.75 0.75)" d="M32 2a11.978 11.978 0 0 0-9.657 19.094l4.723 12.265a1 1 0 0 0 1.868-.718l-3.259-8.462A11.9 11.9 0 0 0 31 25.949V32a1 1 0 0 0 2 0v-6.051a11.9 11.9 0 0 0 5.325-1.77l-3.259 8.462a1 1 0 0 0 1.868.718l4.723-12.265A11.978 11.978 0 0 0 32 2Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10ZM41 32h2v2h-2zM45 32h2v2h-2zM49 32h4v2h-4z" />
              </svg>
              <h4 className="h4 mb-2">Projection Mapping</h4>
              {/* <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p> */}
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 64 64"
                className="w-16 h-16 mb-4" 
              >
                <title>{"a"}</title>
                <rect className="fill-current text-green-600" width="64" height="64" rx="32" />
                <path
                  className="stroke-green-600 fill-white text-green-100"
                  transform="translate(10 10) scale(0.5 0.5)"
                  d="M37.324 49.643a15.573 15.573 0 0 1-5.546-3.11L20.26 58.051a5.757 5.757 0 1 1-1.484-1.5l11.508-11.506q-.315-.359-.607-.736a15.585 15.585 0 0 1 .57-19.769L18.731 13.025a5.757 5.757 0 1 1 1.5-1.484l11.505 11.506a15.59 15.59 0 0 1 20.506-.036l8.188-8.188a5.762 5.762 0 1 1 1.485 1.5L53.736 24.5a15.522 15.522 0 0 1 3.826 9.192h16.285a5.758 5.758 0 1 1-.01 2.109H57.566a15.6 15.6 0 0 1-10.881 13.844v2.49a4.677 4.677 0 0 1 7.236 3.658 4.651 4.651 0 0 1 5.876.594 4.681 4.681 0 0 1 1.3 2.455 4.649 4.649 0 0 1 2.651-.829c.093 0 .2.005.326.013a4.847 4.847 0 0 1 3.033 1.374 4.315 4.315 0 0 1 1.326 3.079c0 .08 0 .176-.011.29L67 83.02a1.066 1.066 0 0 1-.037.214l-1.947 6.9a3.222 3.222 0 0 1-3.124 2.366H40.133a3.251 3.251 0 0 1-3.223-2.849l-.393-3.166-4.006-4.929a1.051 1.051 0 0 1-.175-.265l-7.162-15.447a5.259 5.259 0 0 1-.343-3.555 4.446 4.446 0 0 1 2.1-2.743 4.676 4.676 0 0 1 6.38 1.709l3.989 6.916.021-18.528Zm16.6 9.9V63.3a1.055 1.055 0 0 1-2.109 0v-7.263a2.568 2.568 0 0 0-5.133-.128v5.33a1.055 1.055 0 0 1-2.11 0V38.4a2.567 2.567 0 0 0-5.133 0L39.4 72.083a1.051 1.051 0 0 1-1.977.5l-5.93-10.27a2.587 2.587 0 0 0-3.509-.944 2.376 2.376 0 0 0-1.117 1.466 3.157 3.157 0 0 0 .22 2.129l7.107 15.331 4.15 5.1a1.06 1.06 0 0 1 .228.536L39 89.4a1.12 1.12 0 0 0 1.13 1h21.762a1.112 1.112 0 0 0 1.1-.827l1.918-6.794 1.41-20.153v-.15a2.219 2.219 0 0 0-.692-1.579 2.717 2.717 0 0 0-1.7-.77c-.046 0-.108-.005-.186-.005a2.584 2.584 0 0 0-2.573 2.436v3.667a1.055 1.055 0 0 1-2.11 0V59.69a2.569 2.569 0 0 0-5.133-.147Zm-7.239-12.116a13.478 13.478 0 1 0-9.358 0v-4.145a9.766 9.766 0 0 1-3.5-3.285 9.7 9.7 0 1 1 12.858 3.283v4.147Zm-9.351-6.659v-2.373a4.676 4.676 0 0 1 9.352 0v2.37a7.605 7.605 0 1 0-9.351 0ZM15.5 4.609a3.65 3.65 0 1 0 2.581 1.069A3.641 3.641 0 0 0 15.5 4.609Zm-3.65 56.678a3.65 3.65 0 1 0 1.069-2.581 3.636 3.636 0 0 0-1.069 2.581Zm70.236-23.932a3.653 3.653 0 1 0-2.581 1.068 3.642 3.642 0 0 0 2.581-1.068Zm-13.24-25.769a3.65 3.65 0 1 0-1.069 2.581 3.638 3.638 0 0 0 1.069-2.581Z"
                  style={{
                    fillRule: "evenodd",
                  }}
                />
              </svg>
              <h4 className="h4 mb-2">Interactive Installations</h4>
              {/* <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p> */}
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-green-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-green-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-green-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-center">Custom AI Video/Image Generation</h4>
              {/* <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p> */}
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 64 64"
                className="w-16 h-16 mb-4" 
              >
                <rect className="fill-current text-green-600" width="64" height="64" rx="32" />
                <path className="stroke-green-600 fill-current text-green-100" transform="translate(10 12) scale(1.35 1.35)" d="M22 14h-1a1 1 0 1 0 0 2h1c.552 0 1 .449 1 1a1 1 0 1 0 2 0c0-1.654-1.346-3-3-3z" />
                <path className="stroke-green-600 fill-current text-green-100" transform="translate(10 12) scale(1.35 1.35)" d="M24.99 11.432C23.388 8.078 19.996 6 16 6c-3.997 0-7.389 2.078-8.99 5.433A4.977 4.977 0 0 0 4 16v2c0 2.271 1.567 4.235 3.708 4.806C9.072 25.68 11.33 30 16 30c4.671 0 6.928-4.32 8.292-7.195C26.438 22.23 28 20.268 28 18v-2a4.973 4.973 0 0 0-3.01-4.568zM16 8c2.648 0 4.953 1.123 6.396 3H9.604C11.047 9.123 13.352 8 16 8zm0 20c-2.848 0-4.563-2.302-5.96-5H11a3.006 3.006 0 0 0 2.83-2h4.34A3.006 3.006 0 0 0 21 23h.96c-1.397 2.698-3.112 5-5.96 5zm10-10a3.007 3.007 0 0 1-2.565 2.962c-.14.022-.288.038-.435.038h-2c-.552 0-1-.449-1-1a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1c0 .551-.448 1-1 1H9c-.147 0-.295-.016-.446-.04A3.003 3.003 0 0 1 6 18v-2c0-1.292.822-2.433 2.062-2.847.29-.101.606-.153.938-.153h14c.332 0 .648.052.953.159A2.99 2.99 0 0 1 26 16v2z" />
                <path className="stroke-green-600 fill-current text-green-100" transform="translate(10 12) scale(1.35 1.35)" d="M25 9a1 1 0 1 0 2 0c0-2.206-1.794-4-4-4a1 1 0 1 0 0 2c1.103 0 2 .897 2 2zM9 4a1 1 0 1 0 0-2C5.14 2 2 5.14 2 9a1 1 0 1 0 2 0c0-2.757 2.243-5 5-5z" />
                <path className="stroke-green-600 fill-current text-green-100" transform="translate(10 12) scale(1.35 1.35)" d="M17.553 23.105 16 23.882l-1.553-.777a1 1 0 0 0-.894 1.79l2 1a1 1 0 0 0 .894 0l2-1a1 1 0 1 0-.894-1.79zM23 2a1 1 0 1 0 0 2c2.757 0 5 2.243 5 5a1 1 0 1 0 2 0c0-3.86-3.14-7-7-7z" />
                <path className="stroke-green-600 fill-current text-green-100" transform="translate(10 12) scale(1.35 1.35)" d="M9 5C6.794 5 5 6.794 5 9a1 1 0 1 0 2 0c0-1.103.897-2 2-2a1 1 0 1 0 0-2z" />
              </svg>
              <h4 className="h4 mb-2">Immersive Experiences</h4>
              {/* <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p> */}
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 64 64"
                className="w-16 h-16 mb-4"
              >
                <rect className="fill-current text-green-600" width="64" height="64" rx="32" />
                <path className="stroke-green-600 fill-current text-green-100" transform="translate(7 8)" d="M11.643 17.426C10.568 19.441 10 21.715 10 24s.568 4.559 1.643 6.574c.26.487.075 1.094-.412 1.354a1.005 1.005 0 0 1-1.354-.412C8.65 29.211 8 26.612 8 24s.649-5.211 1.877-7.516a1.005 1.005 0 0 1 1.354-.412c.487.26.671.866.412 1.354zm2.971.77a1.003 1.003 0 0 0-1.342.447C12.428 20.331 12 22.134 12 24s.428 3.669 1.272 5.356a1 1 0 0 0 1.789-.895 9.897 9.897 0 0 1 .001-8.923 1 1 0 0 0-.448-1.342zm22.156-2.124c-.487.26-.672.866-.412 1.354C37.432 19.441 38 21.715 38 24s-.568 4.559-1.643 6.574a1.002 1.002 0 0 0 .412 1.354c.49.257 1.093.073 1.354-.412C39.351 29.211 40 26.612 40 24s-.649-5.211-1.877-7.516a1.004 1.004 0 0 0-1.353-.412zm-3.384 2.124a1 1 0 0 0-.447 1.342C33.643 20.945 34 22.447 34 24s-.357 3.055-1.062 4.462a1 1 0 0 0 1.789.895C35.572 27.669 36 25.866 36 24s-.428-3.669-1.272-5.356a1.002 1.002 0 0 0-1.342-.448zm-1.87-8.319C29.211 8.649 26.612 8 24 8s-5.211.649-7.516 1.877a1.001 1.001 0 0 0 .942 1.766C19.442 10.568 21.715 10 24 10s4.559.568 6.574 1.643c.487.26 1.094.075 1.354-.412a1.005 1.005 0 0 0-.412-1.354zm-2.159 3.395C27.669 12.428 25.866 12 24 12s-3.669.428-5.356 1.272a1 1 0 0 0 .895 1.789C20.945 14.357 22.447 14 24 14s3.055.357 4.462 1.062a1 1 0 1 0 .895-1.79zM48 24c0 1.379-.94 2.531-2.21 2.881a21.814 21.814 0 0 1-4.304 10.442c.325.479.514 1.056.514 1.677 0 1.654-1.346 3-3 3a2.983 2.983 0 0 1-1.672-.511A22.08 22.08 0 0 1 34 43.583V47a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1v-3.417a22.05 22.05 0 0 1-3.328-2.094A2.983 2.983 0 0 1 9 42c-1.654 0-3-1.346-3-3 0-.621.189-1.198.513-1.677a21.826 21.826 0 0 1-4.304-10.442C.94 26.531 0 25.379 0 24s.94-2.531 2.21-2.881a21.826 21.826 0 0 1 4.304-10.442A2.983 2.983 0 0 1 6 9c0-1.654 1.346-3 3-3 .621 0 1.198.19 1.677.514A21.804 21.804 0 0 1 21.119 2.21C21.469.94 22.621 0 24 0s2.531.94 2.881 2.21a21.814 21.814 0 0 1 10.442 4.304A2.983 2.983 0 0 1 39 6c1.654 0 3 1.346 3 3 0 .621-.19 1.198-.514 1.677a21.804 21.804 0 0 1 4.304 10.442A2.996 2.996 0 0 1 48 24zM38 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM23 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM8 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM4 24a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm6 15a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm22-1c0-3.309-2.691-6-6-6h-4c-3.309 0-6 2.691-6 6v8h16v-8zm-8-8c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.692 6 6 6zm16 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3.792-12.259A3 3 0 0 1 42 24c0-1.224.739-2.275 1.792-2.742a19.816 19.816 0 0 0-3.92-9.403A2.924 2.924 0 0 1 39 12c-1.654 0-3-1.346-3-3 0-.305.059-.595.145-.872a19.826 19.826 0 0 0-9.403-3.92C26.276 5.261 25.224 6 24 6a3 3 0 0 1-2.741-1.792 19.816 19.816 0 0 0-9.403 3.92c.085.277.144.567.144.872 0 1.654-1.346 3-3 3-.305 0-.594-.059-.872-.144a19.814 19.814 0 0 0-3.92 9.403A3 3 0 0 1 6 24a3 3 0 0 1-1.792 2.741 19.828 19.828 0 0 0 3.92 9.403C8.406 36.059 8.695 36 9 36c1.654 0 3 1.346 3 3 0 .307-.06.598-.146.877.682.521 1.398 1 2.146 1.432V38c0-3.469 2.224-6.421 5.317-7.527C17.312 29.018 16 26.662 16 24c0-4.411 3.589-8 8-8s8 3.589 8 8c0 2.662-1.312 5.018-3.317 6.473C31.776 31.579 34 34.531 34 38v3.309a20.069 20.069 0 0 0 2.146-1.432A2.963 2.963 0 0 1 36 39c0-1.654 1.346-3 3-3 .305 0 .595.059.872.145a19.81 19.81 0 0 0 3.92-9.404zM46 24a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
              </svg>
              <h4 className="h4 mb-2">Spatial Audio</h4>
              {/* <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p> */}
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 64 64"
                className="w-16 h-16 mb-4"
              >
                <rect className="fill-current text-green-600" width="64" height="64" rx="32" />
                <switch 
                  className="stroke-green-600 fill-current text-green-100" 
                  transform="translate(9,9) scale(0.45 0.45)">
                  <g>
                    <path d="M5273.1 2400.1v-2c0-2.8-5-4-9.7-4s-9.7 1.3-9.7 4v2c0 1.8.7 3.6 2 4.9l5 4.9c.3.3.4.6.4 1v6.4c0 .4.2.7.6.8l2.9.9c.5.1 1-.2 1-.8v-7.2c0-.4.2-.7.4-1l5.1-5c1.3-1.3 2-3.1 2-4.9zm-9.7-.1c-4.8 0-7.4-1.3-7.5-1.8.1-.5 2.7-1.8 7.5-1.8s7.3 1.3 7.5 1.8c-.2.5-2.7 1.8-7.5 1.8z" />
                    <path d="M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zM5272.7 2417h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM69.7 2.5H30.3c-4 0-7.2 3.2-7.2 7.2v80.5c0 4 3.2 7.2 7.2 7.2h39.4c4 0 7.2-3.2 7.2-7.2V9.7c0-4-3.2-7.2-7.2-7.2zM30.3 6.6h39.4c1.7 0 3.2 1.4 3.2 3.2v7.9H27.1v-8c0-1.7 1.5-3.1 3.2-3.1zm42.6 15.1v52.1H27.1V21.7h45.8zm-3.2 71.7H30.3c-1.7 0-3.2-1.4-3.2-3.2V77.9h45.7v12.4c.1 1.7-1.4 3.1-3.1 3.1z" />
                    <path d="M44.1 14.1H56c1.1 0 2-.9 2-2s-.9-2-2-2H44.1c-1.1 0-2 .9-2 2-.1 1.1.8 2 2 2zM50 81.5c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1 4.1-1.8 4.1-4.1c0-2.2-1.8-4.1-4.1-4.1zM33.8 48.4l5.2 5.2c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2.1 0-2.9L38.2 47l3.8-3.8c.8-.8.8-2.1 0-2.9-.8-.8-2.1-.8-2.9 0l-5.2 5.2c-.9.8-.9 2.1-.1 2.9zM58.1 53.6c.4.4.9.6 1.4.6s1-.2 1.4-.6l5.2-5.2c.4-.4.6-.9.6-1.4 0-.5-.2-1.1-.6-1.4L61 40.3c-.8-.8-2.1-.8-2.9 0s-.8 2.1 0 2.9l3.8 3.8-3.8 3.8c-.8.8-.8 2 0 2.8zM47.3 58.1c.2 0 .3.1.5.1.9 0 1.8-.6 2-1.6l4.4-18.3c.3-1.1-.4-2.2-1.5-2.5-1.1-.3-2.2.4-2.5 1.5l-4.4 18.3c-.3 1.2.4 2.3 1.5 2.5z" />
                  </g>
                </switch>
              </svg>
              <h4 className="h4 mb-2">Custom Applications</h4>
              {/* <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p> */}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
