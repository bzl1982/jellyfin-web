import type { ColorSystemOptions, ThemeOptions } from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';

const LIST_ICON_WIDTH = 36;

/**
 * FUSE3 设计语言视觉 token（单一事实源：D:\A\tokens\fuse3.json 经 style-dictionary 生成）。
 * 这些值现在由 src/themes/fuse3.scss 在 :root 全局定义（不依赖 MUI CssBaseline 注入，
 * MUI v6 colorScheme 模式下 body 注入不可靠，见诊断咨询案）。SCSS（背景/卡片/入场动效）直接消费。
 * 此处保留为 JS 可读的 token 文档锚点，不再注入任何样式系统。
 */
export const FUSE3_CSS_VARS = {
    '--fuse3-accent': '#03b585',
    '--fuse3-secondary': '#1ed79e',
    '--fuse3-bg-base': '#000000',
    '--fuse3-bg-surface': '#161616',
    '--fuse3-text': '#ededed',
    '--fuse3-font': 'Inter, Noto Sans, sans-serif',
    '--fuse3-view-pad': '80px',
    '--fuse3-scrollbar-w': '10px',
    '--fuse3-gap-widget': '8px',
    '--fuse3-radius-card': '8px',
    '--fuse3-enter-dur': '400ms',
    '--fuse3-enter-from': '0.85',
    '--fuse3-enter-ease': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '--fuse3-focus-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    '--fuse3-blur': '60px',
    '--fuse3-overlay': '0.6',
    '--fuse3-zoom-from': '1.1',
    '--fuse3-zoom-to': '1.5',
    '--fuse3-zoom-dur': '25000ms'
};

/** The default "Dark" color scheme. */
export const DEFAULT_COLOR_SCHEME: ColorSystemOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#03b585'
        },
        secondary: {
            main: '#1ed79e'
        },
        background: {
            default: '#000000',
            paper: '#161616'
        },
        action: {
            selectedOpacity: 0.2
        },
        starIcon: {
            main: '#f2b01e' // Yellow color
        },
        error: {
            main: '#c62828' // Red color
        },
        AppBar: {
            defaultBg: '#161616'
        }
    }
};

/** The default customizations to the default MUI theme. */
export const DEFAULT_THEME_OPTIONS: ThemeOptions = {
    typography: {
        fontFamily: '"Inter", "Noto Sans", sans-serif',
        button: {
            textTransform: 'none'
        },
        h1: {
            fontSize: '1.8rem'
        },
        h2: {
            fontSize: '1.5rem'
        },
        h3: {
            fontSize: '1.17rem'
        }
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                message: {
                    // NOTE: This seems like a bug. Block content does not fill the container width.
                    flexGrow: 1
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                colorTransparent: ({ theme }) => ({
                    color: theme.vars.palette.text.primary
                })
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                // FUSE3 视觉 token 现由 src/themes/fuse3.scss 在 :root 全局定义（不依赖 MUI 注入，见该文件）
                // 此处不再注入 FUSE3_CSS_VARS，仅保留 MUI 原生 body 覆盖
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            },
            variants: [
                {
                    props: {
                        size: 'large'
                    },
                    style: {
                        fontSize: '1rem',
                        fontWeight: 'bold'
                    }
                }
            ]
        },
        MuiFormControl: {
            defaultProps: {
                variant: 'filled'
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontSize: '1rem'
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: 'filled'
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: LIST_ICON_WIDTH
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    // NOTE: Added for drawer subheaders, but maybe it won't work in other cases?
                    backgroundColor: 'inherit',
                    position: 'initial'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                inset: {
                    paddingLeft: LIST_ICON_WIDTH
                }
            }
        }
    }
};
