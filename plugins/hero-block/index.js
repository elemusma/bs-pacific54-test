wp.blocks.registerBlockType('brownsurfing/hero-block',
    {
        title: 'Brown Surfing Hero Block',
        icon: 'editor-kitchensink',
        category: 'common',
        edit: function (props) {
            return wp.element.createElement(
                'div',
                {
                    className: 'container-xxl position-relative p-0'
                },
                wp.element.createElement(
                    'nav',
                    {
                        className: 'navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0'
                    },
                    wp.element.createElement(
                        'a',
                        {
                            href: '', className: 'navbar-brand p-0'
                        },
                        wp.element.createElement(
                            'h1',
                            {
                                className: 'm-0'
                            },
                            wp.element.createElement('i',
                                {
                                    className: 'fa fa-search me-2'
                                }),
                            'SEO',
                            wp.element.createElement('span',
                                {
                                    className: 'fs-5'
                                }, 'Master')
                        )
                    ),
                    wp.element.createElement(
                        'button',
                        {
                            className: 'navbar-toggler', type: 'button', 'data-bs-toggle': 'collapse', 'data-bs-target': '#navbarCollapse'
                        },
                        wp.element.createElement('span',
                            {
                                className: 'fa fa-bars'
                            })
                    ),
                    wp.element.createElement(
                        'div',
                        {
                            className: 'collapse navbar-collapse', id: 'navbarCollapse'
                        },
                        wp.element.createElement(
                            'div',
                            {
                                className: 'navbar-nav ms-auto py-0'
                            },
                            wp.element.createElement('a',
                                {
                                    href: 'index.html', className: 'nav-item nav-link active'
                                }, 'Home'),
                            wp.element.createElement('a',
                                {
                                    href: 'about.html', className: 'nav-item nav-link'
                                }, 'About'),
                            wp.element.createElement('a',
                                {
                                    href: 'service.html', className: 'nav-item nav-link'
                                }, 'Service'),
                            wp.element.createElement('a',
                                {
                                    href: 'project.html', className: 'nav-item nav-link'
                                }, 'Project'),
                            wp.element.createElement(
                                'div',
                                {
                                    className: 'nav-item dropdown'
                                },
                                wp.element.createElement(
                                    'a',
                                    {
                                        href: '#', className: 'nav-link dropdown-toggle', 'data-bs-toggle': 'dropdown'
                                    },
                                    'Pages'
                                ),
                                wp.element.createElement(
                                    'div',
                                    {
                                        className: 'dropdown-menu m-0'
                                    },
                                    wp.element.createElement('a',
                                        {
                                            href: 'team.html', className: 'dropdown-item'
                                        }, 'Our Team'),
                                    wp.element.createElement('a',
                                        {
                                            href: 'testimonial.html', className: 'dropdown-item'
                                        }, 'Testimonial'),
                                    wp.element.createElement('a',
                                        {
                                            href: '404.html', className: 'dropdown-item'
                                        }, '404 Page')
                                )
                            ),
                            wp.element.createElement('a',
                                {
                                    href: 'contact.html', className: 'nav-item nav-link'
                                }, 'Contact')
                        ),
                        wp.element.createElement(
                            'button',
                            {
                                type: 'button', className: 'btn text-secondary ms-3', 'data-bs-toggle': 'modal', 'data-bs-target': '#searchModal'
                            },
                            wp.element.createElement('i',
                                {
                                    className: 'fa fa-search'
                                })
                        ),
                        wp.element.createElement(
                            'a',
                            { href: 'https: //htmlcodex.com/startup-company-website-template', className: 'btn btn-secondary text-light rounded-pill py-2 px-4 ms-3' },
                            'Pro Version'
                        )
                    )
                ),
                wp.element.createElement(
                    'div',
                    {
                        className: 'container-xxl py-5 bg-primary hero-header mb-5'
                    },
                    wp.element.createElement(
                        'div',
                        {
                            className: 'container my-5 py-5 px-lg-5'
                        },
                        wp.element.createElement(
                            'div',
                            {
                                className: 'row g-5 py-5'
                            },
                            wp.element.createElement(
                                'div',
                                {
                                    className: 'col-lg-6 text-center text-lg-start'
                                },
                                wp.element.createElement('h1',
                                    {
                                        className: 'text-white mb-4 animated zoomIn'
                                    }, 'All in one SEO tool need to grow your business rapidly'),
                                wp.element.createElement('p',
                                    {
                                        className: 'text-white pb-3 animated zoomIn'
                                    }, 'Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem'),
                                wp.element.createElement('a',
                                    {
                                        href: '', className: 'btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft'
                                    }, 'Free Quote'),
                                wp.element.createElement('a',
                                    {
                                        href: '', className: 'btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight'
                                    }, 'Contact Us')
                            ),
                            wp.element.createElement(
                                'div',
                                {
                                    className: 'col-lg-6 text-center text-lg-start'
                                },
                                wp.element.createElement('img',
                                    {
                                        className: 'img-fluid', src: plugins_url('img/hero.png', __FILE__), alt: ''
                                    })
                            )
                        )
                    )
                )
            );
        },
        save: function (props) {
            return wp.element.createElement(
                'div',
                {
                    className: 'container-xxl position-relative p-0'
                },
                wp.element.createElement(
                    'nav',
                    {
                        className: 'navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0'
                    },
                    wp.element.createElement(
                        'a',
                        {
                            href: '', className: 'navbar-brand p-0'
                        },
                        wp.element.createElement(
                            'h1',
                            {
                                className: 'm-0'
                            },
                            wp.element.createElement('i',
                                {
                                    className: 'fa fa-search me-2'
                                }),
                            'SEO',
                            wp.element.createElement('span',
                                {
                                    className: 'fs-5'
                                }, 'Master')
                        )
                    ),
                    wp.element.createElement(
                        'button',
                        {
                            className: 'navbar-toggler', type: 'button', 'data-bs-toggle': 'collapse', 'data-bs-target': '#navbarCollapse'
                        },
                        wp.element.createElement('span',
                            {
                                className: 'fa fa-bars'
                            })
                    ),
                    wp.element.createElement(
                        'div',
                        {
                            className: 'collapse navbar-collapse', id: 'navbarCollapse'
                        },
                        wp.element.createElement(
                            'div',
                            {
                                className: 'navbar-nav ms-auto py-0'
                            },
                            wp.element.createElement('a',
                                {
                                    href: 'index.html', className: 'nav-item nav-link active'
                                }, 'Home'),
                            wp.element.createElement('a',
                                {
                                    href: 'about.html', className: 'nav-item nav-link'
                                }, 'About'),
                            wp.element.createElement('a',
                                {
                                    href: 'service.html', className: 'nav-item nav-link'
                                }, 'Service'),
                            wp.element.createElement('a',
                                {
                                    href: 'project.html', className: 'nav-item nav-link'
                                }, 'Project'),
                            wp.element.createElement(
                                'div',
                                {
                                    className: 'nav-item dropdown'
                                },
                                wp.element.createElement(
                                    'a',
                                    {
                                        href: '#', className: 'nav-link dropdown-toggle', 'data-bs-toggle': 'dropdown'
                                    },
                                    'Pages'
                                ),
                                wp.element.createElement(
                                    'div',
                                    {
                                        className: 'dropdown-menu m-0'
                                    },
                                    wp.element.createElement('a',
                                        {
                                            href: 'team.html', className: 'dropdown-item'
                                        }, 'Our Team'),
                                    wp.element.createElement('a',
                                        {
                                            href: 'testimonial.html', className: 'dropdown-item'
                                        }, 'Testimonial'),
                                    wp.element.createElement('a',
                                        {
                                            href: '404.html', className: 'dropdown-item'
                                        }, '404 Page')
                                )
                            ),
                            wp.element.createElement('a',
                                {
                                    href: 'contact.html', className: 'nav-item nav-link'
                                }, 'Contact')
                        ),
                        wp.element.createElement(
                            'button',
                            {
                                type: 'button', className: 'btn text-secondary ms-3', 'data-bs-toggle': 'modal', 'data-bs-target': '#searchModal'
                            },
                            wp.element.createElement('i',
                                {
                                    className: 'fa fa-search'
                                })
                        ),
                        wp.element.createElement(
                            'a',
                            { href: 'https: //htmlcodex.com/startup-company-website-template', className: 'btn btn-secondary text-light rounded-pill py-2 px-4 ms-3' },
                            'Pro Version'
                        )
                    )
                ),
                wp.element.createElement(
                    'div',
                    {
                        className: 'container-xxl py-5 bg-primary hero-header mb-5'
                    },
                    wp.element.createElement(
                        'div',
                        {
                            className: 'container my-5 py-5 px-lg-5'
                        },
                        wp.element.createElement(
                            'div',
                            {
                                className: 'row g-5 py-5'
                            },
                            wp.element.createElement(
                                'div',
                                {
                                    className: 'col-lg-6 text-center text-lg-start'
                                },
                                wp.element.createElement('h1',
                                    {
                                        className: 'text-white mb-4 animated zoomIn'
                                    }, 'All in one SEO tool need to grow your business rapidly'),
                                wp.element.createElement('p',
                                    {
                                        className: 'text-white pb-3 animated zoomIn'
                                    }, 'Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem'),
                                wp.element.createElement('a',
                                    {
                                        href: '', className: 'btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft'
                                    }, 'Free Quote'),
                                wp.element.createElement('a',
                                    {
                                        href: '', className: 'btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight'
                                    }, 'Contact Us')
                            ),
                            wp.element.createElement(
                                'div',
                                {
                                    className: 'col-lg-6 text-center text-lg-start'
                                },
                                wp.element.createElement('img',
                                    {
                                        className: 'img-fluid', src: plugins_url('img/hero.png', __FILE__), alt: ''
                                    })
                            )
                        )
                    )
                )
            );
        },

    });