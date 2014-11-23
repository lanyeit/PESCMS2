<?php foreach (json_decode($field['field_option'], true) as $key => $value) : ?>
    <label class="form-checkbox-label">
        <input class="form-checkbox" type="checkbox" name="<?= $field['field_name'] ?>[]" value="<?= $key ?>" <?= $field['field_required'] == '1' ? 'required' : '' ?>  <?= $field['value'] == $key ? 'checked="checked"' : empty($field['value']) && $field['field_default'] == $key ? 'checked="checked"' : '' ?> />
        <span>
            <?= $value ?>
        </span>
    </label>
<?php endforeach; ?>