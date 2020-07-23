<template>
	<div>
		<b-container>
			<b-row class="mt-3">
				<b-col cols="4" md="4">
					<div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="1500"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;">

      <b-carousel-slide img-src="https://img.abc-mart.net/img/event/2020/2005_toppage/cons_sale/375x375.jpg"></b-carousel-slide>

      <b-carousel-slide img-src="https://img.abc-mart.net/img/event/2020/2002_toppage/adidas_sale/375x375.jpg"></b-carousel-slide>

    </b-carousel>

  </div>
				</b-col>
				<b-col cols="4" md="4">
					<b-img src="https://img.abc-mart.net/img/event/2020/2005_toppage/nike_sale/375x375.jpg"></b-img>
				</b-col>
				<b-col cols="4" md="4">
					<b-img src="https://img.abc-mart.net/img/event/2020/2006_gs/375x375_sale.jpg"></b-img>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	// export default {
 //    data() {
 //      return {
 //        slide: 0,
 //        sliding: null
 //      }
 //    },
 //    methods: {
 //      onSlideStart(slide) {
 //        this.sliding = true
 //      },
 //      onSlideEnd(slide) {
 //        this.sliding = false
 //      }
 //    }
 //  }
</script>