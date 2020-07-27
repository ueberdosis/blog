<template>
    <article class="c-article">
        <header class="c-article__header">
            <h1 class="c-article__title">
                {{ title }}
            </h1>
            <p class="c-article__meta">
                <time :datetime="publishedAt">
                    {{ formattedPublishedAt }}
                </time>
            </p>
        </header>

        <section class="c-article__content" v-html="content">

        </section>
    </article>
</template>

<script>
export default {
    props: {
        title: {
            default: null,
            type: String,
        },
        content: {
            default: null,
            type: String,
        },
        publishedAt: {
            default: null,
            type: String,
        },
    },

    computed: {
        formattedPublishedAt() {
            return this.publishedAt
        },
    }
}
</script>