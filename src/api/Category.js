import request from '../utils/http'

/**
 * 获取所有分类具体子分类[types]数据
 * 
 * @param {string} categoryType  可接受参数 Article | GanHuo | Girl
 *                               Article: 专题分类、 GanHuo: 干货分类 、 Girl:妹子图
 */
export function fetchCategoryList(categoryType = 'GanHuo') {
    return request({
        url: `api/v2/categories/${categoryType}`,
        method: 'GET'
    })
}

export function fetchList(category = "Girl", type = 'Girl', page = 1, count = 10) {
    return request({
        url: `/api/v2/data/category/${category}/type/${type}/page/${page}/count/${count}`,
        method: 'GET'
    })
}
