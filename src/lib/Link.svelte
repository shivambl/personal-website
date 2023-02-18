<script>
    export let href = "/";
    export let is_external = false;

    let target = null;
    let rel = null;
    if (is_external) {
        target = "_blank";
        rel = "noopener noreferrer"
    }
</script>

<a {href} {target} {rel} class="text-blue-700 underline underline-offset-[4.5px] decoration-[1.5px]">
    {#if is_external}
        <slot>external-link</slot>
        <span> ↗</span>
    {:else}
        <slot>link</slot>
    {/if}
</a>
