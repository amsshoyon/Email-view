import AuthLayout from '@components/Layout/AuthLayout';
import BasicLayout from '@components/Layout/Layout';
import { NextPage } from 'next'
import type { ReactElement } from 'react'

export type PageWithMainLayoutType = NextPage & { layout: typeof BasicLayout }
export type PageWithAdminLayoutType = NextPage & { layout: typeof AuthLayout }

export type PageWithLayoutType = PageWithMainLayoutType | PageWithAdminLayoutType

export type LayoutProps = ({ children }: { children: ReactElement }) => ReactElement
export default PageWithLayoutType

//NextComponentType<NextPageContext, any, {}>