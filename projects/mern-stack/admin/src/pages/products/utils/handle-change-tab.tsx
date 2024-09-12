import { NavigateFunction, createSearchParams } from 'react-router-dom'
import { QueryConfig, TQueryParams } from '@/types/common.type'

interface Props {
  keyTab: string
  navigate: NavigateFunction
  queryParams: QueryConfig<TQueryParams>
}

export const handleChangeTab = ({ keyTab, navigate, queryParams }: Props) => {
  const path = '/products'
  const query = queryParams?.q ? { q: queryParams.q.toString() } : {}
  // set key for url
  switch (keyTab) {
    case '1': {
      navigate({
        pathname: path,
        search: createSearchParams({ ...query }).toString()
      })
      break
    }
    case '2': {
      navigate({
        pathname: path,
        search: createSearchParams({ ...query, status: 'active', deleted: 'false' }).toString()
      })
      break
    }
    case '3': {
      navigate({
        pathname: path,
        search: createSearchParams({ ...query, status: 'inactive', deleted: 'false' }).toString()
      })
      break
    }
    case '4': {
      navigate({
        pathname: path,
        search: createSearchParams({ ...query, status: 'inactive', deleted: 'true' }).toString()
      })
      break
    }
  }
}
