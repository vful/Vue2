<template>
<div>
  <div class="form">
    <div class="header">
      <p id="step">STEP2</p>
      <p id="inst">以下にお答えください</p>
    </div>
    <div class="body">
      <p class="genre">現在、生命保険に加入されていますか？</p>
        <label><input type="radio" name="q1" value="はい" @change="updateGender">はい</label>
        <label><input type="radio" name="q1" value="いいえ" @change="updateGender">いいえ</label>
      <p class="genre">現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <label><input type="radio" name="q2" value="はい" @change="updateGender">はい</label>
        <label><input type="radio" name="q2" value="いいえ" @change="updateGender">いいえ</label>
      <p class="genre">過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
        <label><input type="radio" name="q3" value="はい" @change="updateGender">はい</label>
        <label><input type="radio" name="q3" value="いいえ" @change="updateGender">いいえ</label>
    </div>
  </div>
  <div class="button-group">
    <router-link to="/" class="button">前へ戻る ＞</router-link>
    <router-link to="/questionnaire" class="button">次へ進む ＞</router-link>
  </div>
</div>
</template>
