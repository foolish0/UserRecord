package top.m_en.userrecord.controller.vo;

import java.util.ArrayList;
import java.util.Collection;

import cn.windfly.util.PageBarUtil;

public class EasyUiGridVO {
		private int total;
		private Collection<?> rows = new ArrayList<>();
		public EasyUiGridVO() {
			super();
		}
		
		/**
		 * 
		 * @param total 总数
		 * @param rows  数据
		 * 
		 */
		public EasyUiGridVO(int total, Collection<?> rows) {
			super();
			this.total = total;
			this.rows = rows;
		}
		@SuppressWarnings("rawtypes")
		public EasyUiGridVO(PageBarUtil pageBarUtil) {
			super();
			this.total = pageBarUtil.getTotalNum();
			this.rows = pageBarUtil.getObjs();
		}
		public int getTotal() {
			return total;
		}
		public void setTotal(int total) {
			this.total = total;
		}
		public Collection<?> getRows() {
			return rows;
		}
		public void setRows(Collection<?> rows) {
			this.rows = rows;
		}
}
