<!-- src/components/Square.vue -->
<template>
  <div
    class="square"
    :class="{
      'purchased': square.isPurchased,
      'selected': isSelected
    }"
    @click="handleClick"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <!-- Show different content based on state -->
    <div v-if="square.isPurchased" class="purchased-content">
      <div class="owner-badge" v-if="square.owner">
        👤
      </div>
      <span class="square-content">{{ square.content || '🎁' }}</span>
    </div>
    <div v-else class="available-content">
      <span class="price">$1</span>
      <span class="square-id">#{{ square.id }}</span>
    </div>
  </div>
</template>

<script setup>
// We receive data from parent component via props
const props = defineProps({
  square: {
    type: Object,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
});

// Emit events to parent component
const emit = defineEmits(['select', 'hover']);

const handleClick = () => {
  console.log('Square clicked:', props.square.id);
  emit('select', props.square.id);
};

const handleMouseOver = () => {
  emit('hover', props.square.id);
};

const handleMouseLeave = () => {
  emit('hover', null);
};
</script>

<style scoped>
.square {
  width: 50px;
  height: 50px;
  border: 2px solid #e2e8f0;
  background: linear-gradient(145deg, #ffffff, #f7fafc);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.square:hover {
  transform: scale(1.05);
  border-color: #4299e1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.square.selected {
  border-color: #f56565;
  border-width: 3px;
  box-shadow: 0 0 0 2px rgba(245, 101, 101, 0.2);
}

.square.purchased {
  background: linear-gradient(145deg, #fed7d7, #feb2b2);
  border-color: #fc8181;
  cursor: not-allowed;
}

.square.purchased:hover {
  transform: none;
}

.owner-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 0.8rem;
}

.square-content {
  font-size: 1.5rem;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.available-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.price {
  color: #48bb78;
  font-weight: bold;
  font-size: 0.8rem;
}

.square-id {
  color: #718096;
  font-size: 0.7rem;
}
</style>
