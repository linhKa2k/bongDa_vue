<template class="view-mission">
  <div class="title-mission">
    <p class="text-title-mission">NHIỆM VỤ</p>
    <p class="text-info-mission">
      Thực hiện nhiệm vụ ngay để có thêm Xu Tốt chiêu mộ các cầu thủ nhé!
    </p>
  </div>
  <div class="card-mission">
    <Card>
      <template class="card-top-mission" #cardTop>
        <div class="title-time-reset">
          Làm mới sau: {{ Mission.time.timeReset }}
        </div>
      </template>
      <template #cardRight>
        <div class="center-mission">
          <CardMission/>
        </div>
      </template>
    </Card>
  </div>
</template>
<script setup>
import Card from "../../components/Card/Card.vue";
import "../../styles/styleViewMission.scss";
import { Mission } from "../../mockupData/";
import CardMission from './child-content/CardMission.vue'
</script>
