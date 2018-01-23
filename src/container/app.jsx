import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {test} from '../util/test'

class Count extends React.Component {
    // ui层
    constructor(props, context) {
        super(props, context);
        console.log(this.props);
    }

    render() {
        const {value, onIncreaseClick} = this.props;
        return (
            <div id="doc3" className="syy">
                <span>{value}</span>
                <button onClick={onIncreaseClick}>增加</button>
                {/*<div id="bd" className="kpc-bd">*/}
                {/*<div className="mod-cz-hd">*/}
                {/*<div className="hd clearfix">*/}
                {/*<div className="cz-logo cz-syylogo">*/}
                {/*<a href="#"></a>*/}
                {/*</div>*/}
                {/*<h1 className="cz-name">11选5 <span> 第<em id="curr_issue">**</em>期</span></h1>*/}
                {/*<ul className="cz-params cz-params-kp">*/}
                {/*<li>购彩剩余时间:</li>*/}
                {/*<li id="countdown"></li>*/}
                {/*<li>*/}
                {/*销售：9:00～22:00（78期） 10分钟开奖 返奖<b>59%</b>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*<span className="label label-important bg-ccc state_el">暂停销售</span>*/}
                {/*</div>*/}
                {/*<div className="bd">*/}
                {/*<div className="nav-cz-main clearfix">*/}
                {/*<ul className="main">*/}
                {/*<li className="active"><a href="javascript:void(0)">选号投注</a></li>*/}
                {/*<li><a href="javascript:void(0)">遗漏数据</a></li>*/}
                {/*<li><a href="javascript:void(0)">单式上传</a></li>*/}
                {/*</ul>*/}
                {/*<div className="helper-nav">*/}
                {/*<a href="javascript:;">购彩小助手<i className="ico ico-arrow02"></i></a>*/}
                {/*</div>*/}
                {/*<ul className="quirk">*/}
                {/*<li><a href="javascript:void(0)" target="_blank">走势图表</a></li>*/}
                {/*<li className="divider">|</li>*/}
                {/*<li><a href="javascript:void(0)" target="_blank">杀号定胆</a></li>*/}
                {/*<li className="divider">|</li>*/}
                {/*<li><a href="javascript:void(0)" target="_blank" id="sd_plays">玩法介绍</a></li>*/}
                {/*<li className="divider">|</li>*/}
                {/*<li><a href="javascript:void(0)" target="_blank" id="sd_zhongjiang">胆拖奖金对照</a></li>*/}
                {/*<li className="divider">|</li>*/}
                {/*<li><a href="javascript:void(0)" target="_blank">倍投计算器</a></li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<!-- 导航 -->*/}
                {/*<div className="mod-cz-bd">*/}
                {/*<div className="nav-cz-sub" style="position:relative;">*/}
                {/*<ul className="clearfix" id="plays">*/}
                {/*<li ><a href="#">任二</a></li>*/}
                {/*<li ><a href="#">任三</a></li>*/}
                {/*<li ><a href="#">任四</a></li>*/}
                {/*<li className="active"><a href="#">任五</a></li>*/}
                {/*<li ><a href="#">任六</a></li>*/}
                {/*<li ><a href="#">任七</a></li>*/}
                {/*<li ><a href="#">任八</a></li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<!-- 主体部分 -->*/}
                {/*<div className="grid-1 clearfix">*/}
                {/*<!-- 左侧 -->*/}
                {/*<div className="article">*/}
                {/*<div className="plays_box">*/}
                {/*<div className="plays">*/}
                {/*<div className="mod-select-info ssytips">*/}
                {/*<p id="zx_sm" className="plays-memo"><i*/}
                {/*className="ico ico-info-s"></i><b>玩法提示：</b><span>从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em*/}
                {/*className="red">540</em>元</span></p>*/}
                {/*</div>*/}
                {/*<div className="mod-select-bolls code_box">*/}
                {/*<div className="hd">*/}
                {/*<h3 className="clearfix">*/}
                {/*<span className="t1" id="play_tips">*/}
                {/*<em>选号区</em> 至少选5个*/}
                {/*</span>*/}
                {/*<span className="t2"><em>操作区</em> 快捷选号</span>*/}
                {/*</h3>*/}
                {/*</div>*/}
                {/*<div className="bd">*/}
                {/*<div className="tools-boll-list">*/}
                {/*<div className="boll-item boll-item-col3 sd_zx_r5">*/}
                {/*<div className="k">*/}
                {/*<span className="k1">号码<span className="caret"></span></span>*/}
                {/*<span className="k2">遗漏</span>*/}
                {/*</div>*/}
                {/*<div className="v">*/}
                {/*<div className="boll-list">*/}
                {/*<ul className="clearfix">*/}
                {/*<li><em className="btn-boll">01</em><span>0</span></li>*/}
                {/*<li><em className="btn-boll">02</em><span>0</span></li>*/}
                {/*<li><em className="btn-boll">03</em><span*/}
                {/*className="red">5</span></li>*/}
                {/*<li><em className="btn-boll">04</em><span>1</span></li>*/}
                {/*<li><em className="btn-boll">05</em><span>1</span></li>*/}
                {/*<li><em className="btn-boll">06</em><span>2</span></li>*/}
                {/*<li><em className="btn-boll">07</em><span>0</span></li>*/}
                {/*<li><em className="btn-boll">08</em><span>3</span></li>*/}
                {/*<li><em className="btn-boll">09</em><span*/}
                {/*className="">0</span></li>*/}
                {/*<li><em className="btn-boll">10</em><span>1</span></li>*/}
                {/*<li><em className="btn-boll">11</em><span>0</span></li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="t">*/}
                {/*<div className="tool-list">*/}
                {/*<ul className="clearfix dxjo">*/}
                {/*<li><a href="#" className="btn btn-middle">全</a></li>*/}
                {/*<li><a href="#" className="btn btn-middle">大</a></li>*/}
                {/*<li><a href="#" className="btn btn-middle">小</a></li>*/}
                {/*<li><a href="#" className="btn btn-middle">奇</a></li>*/}
                {/*<li><a href="#" className="btn btn-middle">偶</a></li>*/}
                {/*<li><a href="#" className="lnk">清除</a></li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="ft">*/}
                {/*<p className="sel_info">您选了 <b>0</b> 注，共 <b>0</b> 元 <em></em></p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="mod-select-result">*/}
                {/*<div className="hd confirm_sel_code_list" style="margin-left: 200px;text-align: left;">*/}
                {/*<button type="button" className="btn" id="confirm_sel_code"><span*/}
                {/*className="btn-large btn-slt-ok"><i className="l"><i className="r">确认选号</i></i></span>*/}
                {/*</button>*/}
                {/*<a href="javascript:;" className="lnk lnk-calcel">清空选号</a>*/}
                {/*</div>*/}
                {/*<div className="bd clearfix">*/}
                {/*<div className="result">*/}
                {/*<div className="content">*/}
                {/*<ul className="clearfix codelist"></ul>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="qkmethod">*/}
                {/*<ul >*/}
                {/*<li><a className="btn-middle" href="#">机选1注</a></li>*/}
                {/*<li><a className="btn-middle" href="#">机选5注</a></li>*/}
                {/*<li><a className="btn-middle" href="#">机选10注</a></li>*/}
                {/*<li><a className="btn-middle" href="#">清空列表</a></li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="mod-select-result" id="result">*/}
                {/*<div className="ft">*/}
                {/*<div className="total">*/}
                {/*您选了 <b className="em" id="count">0</b> 注， 倍投*/}
                {/*<input className="text" id="mul"*/}
                {/*type="text" value="1"/> 倍，共*/}
                {/*<b className="em" id="money" style="display: inline-block;">0</b> 元*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="mod-submit">*/}
                {/*<button type="button" id="post_data" className="btn btn-sd"><span*/}
                {/*className="btn-large2 btn-large2-primary">立即投注</span></button>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<!-- 右侧 -->*/}
                {/*<div className="aside">*/}
                {/*<div className="mod-aside mod-aside-xssckj">*/}
                {/*<div className="hd clearfix">*/}
                {/*<h3> 11选5 第 <em className="red" id="open_issue">022478</em> 期 开奖</h3>*/}
                {/*<div className="ball-num clearfix">*/}
                {/*<ul id="open_code_list">*/}
                {/*<li className="ico-ball3">09</li>*/}
                {/*<li className="ico-ball3">02</li>*/}
                {/*<li className="ico-ball3">01</li>*/}
                {/*<li className="ico-ball3">07</li>*/}
                {/*<li className="ico-ball3">11</li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*<p className="kj-date">今天已售78期，还剩0期</p>*/}
                {/*</div>*/}
                {/*<div className="bd">*/}
                {/*<div className="kpkjcode">*/}
                {/*<table width="100%">*/}
                {/*<thead>*/}
                {/*<tr style="line-height: 24px;">*/}
                {/*<th>期号</th>*/}
                {/*<th>开奖号码</th>*/}
                {/*<th>*/}
                {/*<span>大小比</span>*/}
                {/*<span>奇偶比</span>*/}
                {/*</th>*/}
                {/*</tr>*/}
                {/*</thead>*/}
                {/*<tbody>*/}
                {/*<tr >*/}
                {/*<td className="issgray">022478</td>*/}
                {/*<td><em className="red syycode">09 02 </em><em*/}
                {/*className="red">01</em><em className="gray666"> 07 11</em></td>*/}
                {/*<td><span className="gray666">3:2</span><span*/}
                {/*className="gray666">4:1</span></td>*/}
                {/*</tr>*/}
                {/*</tbody>*/}
                {/*</table>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="ft text-right muted" style="margin-top: 6px;"><a*/}
                {/*href="javascript:void(0)" target="_blank" className="lnk">查询历史开奖</a> | <a*/}
                {/*href="javascript:void(0)" target="_blank" className="lnk">查看走势图表</a></div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                aaa
            </div>
        )
    }

    componentDidMount() {

    }


}
Count.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
};
const increaseAction = { type: 'increase' };

function mapStateToProps(state) {
    return {
        value: state.couter.count
    }
}
function mapDispatchToProps(dispatch) {
    console.log('dispatch', increaseAction);
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// appComponent为逻辑处理层
// Count 为UI层
export const AppComponent = connect(
    // mpaStateToProps为映射store.getState至Ui层的props
    mapStateToProps,
    // mapdispatchtoProps为映射ui层的动作发射action
    mapDispatchToProps
)(Count);